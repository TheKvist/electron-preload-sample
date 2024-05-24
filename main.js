const { app, BrowserWindow, ipcMain } = require("electron/main");
const fs = require("node:fs/promises");
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, "preload.js"),
    }
  });

  win.loadFile("index.html");
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.handle("fileAPI:writeFile", async (_event, fileName, contents) => {
    const filePath = path.resolve(__dirname, fileName);

    try {
        await fs.writeFile(filePath, contents);
    } catch (error) {
        return false;
    }
    
    return true;
})
