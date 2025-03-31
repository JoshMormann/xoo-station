const { app, BrowserWindow } = require('electron')
const path = require('path')

// Keep a global reference of the window object to prevent it from being garbage collected
let mainWindow

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // Load the index.html of the app
  mainWindow.loadFile('index.html')

  // Open the DevTools (uncomment if needed during development)
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed
  mainWindow.on('closed', function () {
    // Dereference the window object
    mainWindow = null
  })
}

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow)

// Quit when all windows are closed
app.on('window-all-closed', function () {
  // On macOS applications keep their menu bar active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window when the dock icon is clicked and there are no other windows open
  if (mainWindow === null) createWindow()
}) 