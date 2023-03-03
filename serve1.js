let map = require("lodash/map");

let app = require("./app").start(5050);

app.on("root", function (response) {
  response.write("je suis à la racine ");
});
