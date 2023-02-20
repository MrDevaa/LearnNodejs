let http = require("http");

let server = http.createServer();

server.on("request", (request, reponse) => {
  console.log("il ya eu une request");
});

server.listen(8080);
