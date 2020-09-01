const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');

function createWindow() {
    let mainWindow = new BrowserWindow({
        width:800,
        height:600,
        show: false,
        resizable: true,
    });
    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
 
    mainWindow.loadURL(startURL);
    mainWindow.setMenu(null);
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

module.exports = function close() {
    console.log('test');
};

app.on('ready', createWindow);