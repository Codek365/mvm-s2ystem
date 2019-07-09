const {
    app,
    BrowserWindow, 
    session, 
  } = require('electron');
  
  let win;

  // const ses = session.fromPartition('persist:name')

  
  app.on('ready', () => {
  
    let win = new BrowserWindow({
      frame: true,
      showInspectElement: true,
      backgroundColor: '#000000',
      // alwaysOnTop: true,
      transparent: false
    });
    win.maximize();
    win.center();    
    win.show();    
    win.loadURL(`file:///${__dirname}/src/index.html`);
    win.on('close', () => { win = null });

    // let child = new BrowserWindow({ 
    //   parent: win,
    //   frame: false, 
    //   modal: true, 
    //   show: false 
    // })
    // child.loadURL('http://google.com')
    // child.once('ready-to-show', () => {
    //   child.show()
    // })

    

    const ses = win.webContents.session
    console.log(ses.getUserAgent())
    
    
  });