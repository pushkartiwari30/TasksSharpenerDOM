const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Pushkar");
});
server.listen(4000);