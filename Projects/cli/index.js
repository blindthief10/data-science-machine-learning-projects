var exec = require('child_process').exec,
    fs = require('fs'),
    path = require('path'),
    child;

(function readFiles() {
  var files = fs.readdirSync(__dirname + '/execs');
  files.forEach(function(item) {
    if (path.basename(item, path.extname(item)) === process.argv[2]) {
      process.chdir('./execs');
      child = exec('node ' + item, function(err, stdout) {
        if (err) {
          console.log(err);
        } else {
          console.log(stdout);
        }
      })
    }
  })
})();
