const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: __dirname + '/preload.js'
    },
    icon: __dirname + '/icon.ico',
    titleBarStyle: 'hiddenInset',
    autoHideMenuBar: true
  });

  mainWindow.loadFile('index.html');
  
  // 禁止调整窗口大小
  mainWindow.setResizable(false);
  
  // 窗口居中
  mainWindow.center();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
