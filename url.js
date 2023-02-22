// let http = require("http");
// let fs = require("fs");
// let url = require("url");

// let server = http.createServer();

// server.on("request", (request, response) => {
//   response.writeHead(200);

//   let query = url.parse(request.url, true).query;

//   if (query.name === undefined) {
//     response.write("Bonjour Anonyme");
//   } else {
//     response.write("Bonjour" + query.name);
//   }

//   response.end();
// });
// server.listen(5050);
