const {app,BrowserWindow,Menu} = require('electron');
const path = require('path');
require(path.join(__dirname, 'ipc', 'users.ipc.js'));



process.on('uncaughtException',(error)=>{
  console.error("Unexpected error",error);
});

function createWindow(){
  const win = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
      preload:path.join(__dirname,'preload.js'),
      contextIsolation:true,
      enableRemoteModule:false
    }
  });
  if(process.env.NODE_ENV === 'development'){
    win.webContents.openDevTools({ mode: 'detach' });
  }
  Menu.setApplicationMenu(null);
  win.loadURL('http://localhost:4200');
}

app.whenReady().then(createWindow);
app.on('window-all-closed',()=>{
  if(process.platform!=='darwin') app.quit();
});

app.on('activate',()=>{
  if(BrowserWindow.getAllWindows().length===0) createWindow();
});