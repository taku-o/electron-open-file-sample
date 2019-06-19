"use strict";
var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('filePath', (event, filePath) => {
    var f = document.getElementById('ffld');
    f.value = filePath;
    console.log('call filePath');
    console.log(filePath);
});
