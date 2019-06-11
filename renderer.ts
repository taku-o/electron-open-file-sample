// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer().on('filePath', (event, filePath: string) => {
    var f: any = document.getElementById('ffld');
    f.value = filePath;
});
