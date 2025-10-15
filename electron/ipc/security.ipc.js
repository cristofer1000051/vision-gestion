const { ipcMain, safeStorage } = require('electron');
const Store = require('electron-store').default; // 👈
const store = new Store({ name: 'secure-store' });

const TOKEN_STORAGE_KEY = 'auth-token-encrypted';

async function saveTokenSecurely(token) {
    if (!safeStorage.isEncryptionAvailable()) {
        return { success: false, message: 'El cifrado seguro no está disponible.' };
    }
    try {
        // Cifra il token
        const encryptedTokenBuffer = safeStorage.encryptString(token);
        const encryptedTokenBase64 = encryptedTokenBuffer.toString('base64');
        //stocca il token utilizzando auth-token-encrypted all'interno di store
        store.set(TOKEN_STORAGE_KEY, encryptedTokenBase64);
        return { success: true };
    } catch (error) {
        console.error('Error al cifrar y guardar el token:', error);
        return { success: false, message: 'Error interno al procesar el token seguro.' };
    }
}

async function getTokenSecurely() {
    if (!safeStorage.isEncryptionAvailable()) {
        return null;
    }
    // 1. Recupera la stringa Base64 cifrata dal disco
    const encryptedTokenBase64 = store.get(TOKEN_STORAGE_KEY);

    if (!encryptedTokenBase64) {
        return null;
    }
    try {
        // 2. Convertir la Base64 de vuelta a un Buffer
        const encryptedTokenBuffer = Buffer.from(encryptedTokenBase64, 'base64');

        // 3. Descifrar el token usando la clave del SO
        const decryptedToken = safeStorage.decryptString(encryptedTokenBuffer);

        // Devolver el token descifrado (texto plano)
        return `Bearer ${decryptedToken}`;
    } catch (error) {
        console.error('Error al descifrar el token:', error);
        // Devolver null si el descifrado falla (ej. clave de usuario cambiada)
        return null;
    }
};
async function deleteTokenSecurely() {
    try {
        store.delete(TOKEN_STORAGE_KEY);     // rimuove dal disco
        return { success: true };
    } catch (err) {
        console.error('Error al borrar el token:', err);
        return { success: false, message: 'No se pudo eliminar el token' };
    }
}
module.exports = {
    saveTokenSecurely,
    getTokenSecurely
};

function getPlainToken() {
    const b64 = store.get(TOKEN_KEY);
    if (b64 && safeStorage.isEncryptionAvailable()) {
        return safeStorage.decryptString(Buffer.from(b64, 'base64'));
    }
    return null;
}
ipcMain.handle('auth:ping', async (event, url) => {
    const token = getPlainToken();
    if (!token) return false;
    try {
        const r = await fetch(url, {
            method: 'HEAD',
            headers: {
                Authorization: `Bearer ${token}`,
                cache: 'no-store'
            },
        });
        return r.ok;
    }catch{
        return false;
    }
});