// save
let http = require("http");

// createServer
let server = http.createServer();

// server.on
server.on("request", (request, reponse) => {
  console.log("il ya eu une request");
});

//  Server.listen
//  manque le porte (8080);
server.listen();
