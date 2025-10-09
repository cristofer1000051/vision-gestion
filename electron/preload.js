const { contextBridge } = require('electron');
// Exponer APIs seguras al renderer (Angular) si luego quieres usar IPC
contextBridge.exposeInMainWorld('api', {
  ping: () => 'pong'
});