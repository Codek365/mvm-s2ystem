//We Initialize a New View
let view = new BrowserView({
    webPreferences: {
        nodeIntegration: false
    }
});

let mainWindow = remote.getCurrentWindow(); ///< We get the Main Window
mainWindow.setBrowserView(view); ///< Then We Set the View
///< Also we can Set the Width and Height and Position of the View on the Window
view.setBounds({ x: 0, y: 0, width: 400, height: 300 });  
//Lastly we load the URL
view.webContents.loadURL("https://electron.atom.io");