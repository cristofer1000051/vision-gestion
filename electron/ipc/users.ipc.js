const { ipcMain } = require('electron');

ipcMain.on('message', (event, message) => {
  console.log("Message from Renderer:", message);
});
ipcMain.handle('http:get', async (event, path) => {
  const r = await fetch(`${path}`);
  const data = await r.json();
  if (!r.ok) throw new Error(JSON.stringify(data));
  return data;
});

ipcMain.handle('http:post', async (event, { path, body }) => {
  const r = await fetch(`${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  //DEBUG
  console.log(JSON.stringify(body));
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