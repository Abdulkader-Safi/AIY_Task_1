const { contextBridge, ipcRenderer, remote } = require("electron");

contextBridge.exposeInMainWorld("api", {
  title: "The Note API",
  createNote: (data) => ipcRenderer.invoke("createNote", data),
  applicationClose: remote.app.quit(),
});
