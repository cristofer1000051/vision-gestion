const { contextBridge, ipcRenderer } = require('electron');
// Exponer APIs seguras al renderer (Angular) si luego quieres usar IPC

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage:(message)=>ipcRenderer.send('message',message),
  http: Object.freeze({
    get: (path) => ipcRenderer.invoke('http:get', path),
    post: (path, body) => ipcRenderer.invoke('http:post', { path, body }),
  }),
});