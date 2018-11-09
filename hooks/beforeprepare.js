var exec = require('child_process').execSync;
//var exec = require('exec_sync');
console.log("I am running");

// exec("tsc");
// exec("cd ngSrc");
process.chdir('./ngSrc');
exec("ng build");