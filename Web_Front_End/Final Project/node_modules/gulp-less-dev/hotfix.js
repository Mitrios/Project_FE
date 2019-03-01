const FileManager = require('less/lib/less-node/file-manager');


const originLoadFile = FileManager.prototype.loadFile;
FileManager.prototype.loadFile = function() {
  this.contents = {};
  return originLoadFile.apply(this, arguments);
};
