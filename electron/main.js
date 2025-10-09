const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 720,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isDev) {
    // Angular dev server
    win.loadURL('http://localhost:4200');
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    // ⚠️ Cambia <nombre-app> por el "name" de tu app Angular (carpeta que aparece en dist)
    const indexPath = path.join(__dirname, '..', 'dist', '<nombre-app>', 'browser', 'index.html');
    win.loadFile(indexPath);
  }
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null); // sin menú
  createWindow();
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
