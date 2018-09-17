const package = require('../package.json')
const {app, BrowserWindow, Menu, Tray} = require('electron')
const path = require('path')

let win
let tray

function createWindow() {
  win = new BrowserWindow({
    title: `${package.title} (version: ${package.version})`,
    height: 570,
    width: 1000,
    minHeight: 570,
    minWidth: 1000,
    backgroundColor: '#FFFFFF',
    icon: path.join(__dirname, './logo.png'),
    autoHideMenuBar: true,
    useContentSize: true,
    maximizable: true,
    show: false
  })
  win.maximize()
  win.loadURL(package.home)

  // Open the DevTools
  // win.webContents.openDevTools()

  // Show content when there are ready
  win.once('ready-to-show', () => {
    win.show()
  })

  // Set tray menu
  tray = new Tray(`${__dirname}/logo.png`)
  tray.setToolTip(package.title)
  let template = [
    {
      label: '全屏显示 (F11恢复)',
      click: () => win.setFullScreen(true)
    },
    {
      label: '重新加载',
      click: () => win.webContents.reloadIgnoringCache()
    },
    {
      label: `客户端版本号: ${package.version}`
    },
    {
      label: '关闭客户端',
      click: () => app.quit()
    }
  ]
  let menu = Menu.buildFromTemplate(template)
  tray.setContextMenu(menu)

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
