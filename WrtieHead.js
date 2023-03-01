let http = require("http");

let server = http.createServer();

server.on("request", (request, reponse) => {
  reponse.writeHead(200);

  reponse.end("Salut! Comment çava ?");
});
/* manque le porte (5050); */
server.listen();
