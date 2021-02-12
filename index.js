const electron = require('electron');

const {app, BrowserWindow} = electron;

app.on('ready', ()=>{
    //console.log("app is ready");
    const mainWindow = new BrowserWindow({}); // 윈도우 생성
    mainWindow.loadURL(`file://${__dirname}/index.html`);

});
