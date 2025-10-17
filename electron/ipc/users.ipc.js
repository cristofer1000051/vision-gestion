const path = require('path');
const { ipcMain, safeStorage } = require('electron');
//__dirname mi restitura il file fino il file corrente, ovvero non ce bisogno di mettere ipc
const { saveTokenSecurely, getTokenSecurely, deleteTokenSecurely } = require(path.join(__dirname, 'security.ipc.js'));

ipcMain.on('message', (event, message) => {
  console.log("Message from Renderer:", message);
});

ipcMain.handle('http:get', async (event, path) => {
  //si fa il recupero del token
  const authToken = await getTokenSecurely();
  const headers = {
    'Content-Type': 'application/json'
  };
  if (authToken) {
    headers['Authorization'] = authToken;
  }
  const r = await fetch(`${path}`, {
    method: 'GET',
    headers: headers,
  });
  const data = await r.json();
  if (!r.ok) throw new Error(JSON.stringify(data));
  return data;
});

ipcMain.handle('auth:login', async (event, { path, body }) => {
  const r = await fetch(`${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  /** ############################################################################################# */
  //Ricorda che prima di fare qualsiasi richiesta , si fa una piccola richiesta per verificare
  //se la richiesta che verra eseguita ha tutte i dettagli necessari da eseguire lato server
  //questo accadera prima di restituire la risposta richiesta
  /** LOGICA DEL TOKEN */
  let token = r.headers.get('authorization');
  if (token) {
    const token_ = token.replace("Bearer ", "");
    if (token_) {
      const authToken = await getTokenSecurely();
      if (authToken) await deleteTokenSecurely();
      const storeResult = await saveTokenSecurely(token_);
      if (!storeResult.success) {
        console.error('Errore nel salvataggio sicuro del token:', storeResult.message);
        return {
          success: false,
          status: 500,
          message: "Login riuscito, ma fallimento nell'archiviazione sicura del token.",
        };
      }
    }
  };
  /** ############################################################################################# */
  const data = await r.json();
  if (!r.ok) {
    return {
      success: false, // Indicador de fallo
      status: "status: " + data.status, // Tu código de estado
      message: "info: " + data.message.info, // Tu mensaje de error
    };
  }
  return {
    success: true, // Indicador de éxito
    data: data // Los datos de la respuesta de la API
  };
});
ipcMain.handle('auth:logout', async () => {
  await deleteTokenSecurely();
  return true;
});
ipcMain.handle('http:post', async (event, { path, body }) => {

  //si fa il recupero del token
  const authToken = await ipcMain.invoke('store:get-token');
  const headers = {
    'Content-Type': 'application/json'
  };
  if (authToken) {
    headers['Authorization'] = authToken;
  }
  const r = await fetch(`${path}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  });
  //DEBUG
  //console.log(JSON.stringify(body));
  const data = await r.json();
  if (!r.ok) {
    return {
      success: false, // Indicador de fallo
      status: "status: " + data.status, // Tu código de estado
      message: "info: " + data.message.info, // Tu mensaje de error
    };
  }
  return {
    success: true, // Indicador de éxito
    data: data // Los datos de la respuesta de la API
  };
});


