const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');

function createWindow() {
    let mainWindow = new BrowserWindow({
        width:800,
        height:600,
        show: false,
        resizable: true,
        worldSafeExecuteJavaScript: true
    });
    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
 
    mainWindow.loadURL(startURL);
    mainWindow.setMenu(null);
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.on('ready', createWindow);