const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');
autoUpdater.checkForUpdatesAndNotify();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: false,
      preload: path.join(__dirname, '../../electron/preload.js')
    }
  });

  // Load the React app
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, '../build/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  // Open DevTools
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});
