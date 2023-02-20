let http = require("http");
let fs = require("fs");

let server = http.createServer();
server.on("request", (request, reponse) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      reponse.writeHead(404);

      reponse.end("ce fichier exisite pas");
    } else {
      reponse.writeHead(200, {
        "Content-type": "text/html; charset=utf-8",
      });

      reponse.end("data");
    }
  });
});
server.listen(5050);

// problème avec la Data
