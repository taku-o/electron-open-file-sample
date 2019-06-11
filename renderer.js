"use strict";
var f = document.getElementById('ffld');
f.value = require('electron').remote.getGlobal('filePath');
