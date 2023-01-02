const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
const http = require("http");
const os = require('os');
const path = require('path');

const user = os.userInfo().username;
const OS = os.type();
const workingTime = (os.uptime() / 60).toFixed(2);
const currentDir = path.dirname(__dirname);
const serverFileName = path.basename(__filename);

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(`
        <h1>System Info</h1>
        <p>Username: ${user}</p>
        <p>OS type: ${OS}</p>
        <p>System work time: ${workingTime} minutes</p>
        <p>Current work directory: ${currentDir}</p>
        <p>Server File Name: ${serverFileName}</p>
    `);
    response.end();
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');

//todo: task 2 ✅
const greetModule = require("./personalmodule");

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(`
        <p>${greetModule.greetings(user)}</p>
    `);
    response.end();
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');