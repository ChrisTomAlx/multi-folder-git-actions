const { execSync } = require("child_process");
const fs = require("fs")

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
}

let path = '../../'
let folders = getDirectories(path);
console.log(folders);


for (let index = 0; index < folders.length; index++) {   
    try {
        console.log('\u001b[' + 32 + 'm' + folders[index] + '\u001b[0m');
        const cmd = `cd .. && cd .. && cd ${folders[index]} && git pull && cd ..`;
        console.log("Success", execSync(cmd).toString());
     } catch (error) {
        // console.log("Error status", error.status);  // 0 : successful exit, but here in exception it has to be greater than 0
        // console.log("Error msg",  error.message); // Holds the message you typically want.
        // console.log("Error stderr", error.stderr.toString());  // Holds the stderr output. Use `.toString()`.
        // console.log("Error stdout", error.stdout.toString());  // Holds the stdout output. Use `.toString()`.
     }
}