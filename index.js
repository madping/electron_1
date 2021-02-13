const electron = require('electron');
const electronLocalshortcut = require('electron-localshortcut');

const {app, BrowserWindow} = electron;

app.on('ready', ()=>{
    //console.log("app is ready");
    const mainWindow = new BrowserWindow({}); // 윈도우 생성
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.removeMenu();

    electronLocalshortcut.register(mainWindow, 'F12', () => {
        mainWindow.webContents.toggleDevTools();
    });

    electronLocalshortcut.register(mainWindow, 'F5', () => {
        mainWindow.reload();
    });


});



