// jshint esversion: 6
let connect = require('connect');
let serveStatic = require('serve-static');

const staticDir = __dirname + '/static';
const serverPort = process.env.port || process.env.PORT || 8080;

connect().use(serveStatic(staticDir)).listen(serverPort, () =>{
    console.log('Server running on ' + serverPort + '...');
});
