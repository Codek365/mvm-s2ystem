const {
    app,
    BrowserWindow
  } = require('electron');
  

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

    

    win.webContents.session.setCertificateVerifyProc((request, callback) => {
      const { hostname } = request
      console.log('sgdkgasjkdgkjas');
      
      if (hostname === 'banhang.shopee.vn') {
        callback(0)
      } else {
        callback(-2)
      }
    })

    // const enav = new (require('../index.js'))({            
    //       showBackButton: true,
    //       showForwardButton: true,
    //       showReloadButton: true,
    //       showUrlBar: true,
    //       showAddTabButton: true,
    //       closableTabs: true,
    //       verticalTabs: true,
    //       defaultFavicons: true,
    //       newTabCallback: null,
    //       changeTabCallback: null,
    //       newTabParams: null           
    //   });  
    
    
  });