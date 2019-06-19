"use strict";
const { app, BrowserWindow } = require('electron');
let mainWindow;
let gFilePath;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            devTools: true,
        },
    });
    mainWindow.loadFile('index.html');
    mainWindow.webContents.on('did-finish-load', () => {
        if (gFilePath) {
            mainWindow.webContents.send('filePath', gFilePath);
        }
    });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
app.on('will-finish-launching', () => {
    app.on('open-file', (event, filePath) => {
        event.preventDefault();
        if (mainWindow) {
            mainWindow.webContents.send('filePath', filePath);
        }
        else {
            gFilePath = filePath;
        }
    });
});
