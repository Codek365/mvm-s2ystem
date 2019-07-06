const {
    app,
    BrowserWindow
  } = require('electron');
  
  let demo;
  
  app.on('ready', () => {
  
    demo = new BrowserWindow({
      frame: true,
    });
    demo.maximize()
  
    
    demo.loadURL(`file:///${__dirname}/index.html`);
    demo.on('close', () => { demo = null });
    
  });