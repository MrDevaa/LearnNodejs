let app = require("express")();

app.get("/", (request, response) => {
  response.send("salut tu es à la racine");
});

app.get("/demo", (request, response) => {
  response.send("salut tu est sur la demo !");
});

app.listen(3000);

// npm i -s lodash
// npm i -s express

/* 
create a pacage.json
 npm init */

/* Pour récuperer le projet et faire apparaitre le node_modules
 npm install
 */
