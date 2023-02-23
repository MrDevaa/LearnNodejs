const EventEmitter = require("events");

let monEcouteur = new EventEmitter();

monEcouteur.on("saute", function () {
  console.log("jai sauté");
});

/*
Manière Once

monEcouteur.once("saute", function (a, b) {
  console.log("jai sauté", a, b);

monEcouteur.emit("saute", 10, 20);

*/

monEcouteur.emit("saute");
monEcouteur.emit("saute");
monEcouteur.emit("saute");
monEcouteur.emit("saute");
monEcouteur.emit("saute");
