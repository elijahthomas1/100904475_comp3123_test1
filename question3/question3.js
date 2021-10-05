var fs = require('fs');
var path = require('path');
var process = require('process');

if (fs.existsSync('logs')) {
    fs.readdirSync("logs").forEach(log1 => {
        console.log(log1);
    })
    fs.rmdirSync("logs", {recursive: true});

} else {
    fs.mkdirSync("logs");
    fs.opendirSync("logs");
    process.chdir("logs");
    for (let i = 1; i < 11; i++) {
        fs.writeFileSync(`log${i}.txt`, `this is the log file: ${i}`);       
    };
    fs.readdirSync("logs").forEach(log1 => {
        console.log(log1);
    })
    

    
}