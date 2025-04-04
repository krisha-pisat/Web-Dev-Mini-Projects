var http = require("http");

var server= http.createServer((request,response)=>{
    console.log("I am triggered");
})

console.log("server is listening to 8080...");
server.listen(8080);