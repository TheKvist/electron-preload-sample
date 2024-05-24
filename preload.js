const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("fileAPI", {
  writeFile: (fileName, contents) => {
    return ipcRenderer.invoke("fileAPI:writeFile", fileName, contents);
  },
});
