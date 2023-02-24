let fs = require("fs");
let file = "demo.mp4";

/* 
1. Permet d'obtenir des information sur des fichier
fs.stat()

2. permet de d'écrire un flux d'écriture et ce flux va pouvoir recevoir des informations et ensuite les écrire.   
fs.createWriteStream()
*/

fs.stat(file, (err, stat) => {
  let total = stat.size;
  let progress = 0;
  let read = fs.createReadStream(file);

  let Write = fs.createWriteStream("copy.mp4");
  let Write2 = fs.createWriteStream("copy2.mp4");

  read.on("data", (chunk) => {
    progress += chunk.length;

    console.log("j'ai lu " + Math.round((100 * progress) / total) + "%");
  });

  read.pipe(Write);
  read.pipe(Write2);

  Write.on("finish", () => {
    console.log("le fichier a bien etait copié");
  });
});

/*fs.readFile("demo.mp4", (err, data) => {
   if (err) throw err;

   fs.writeFile("copy.mp4", data, (err) => {
     if (err) throw err;

     console.log("ce fichier a bien etait copier");
   });
 });
 */

/*
 *Petite fichier = utiliser la methode fs.readfile()
 *Grande fichier = utiliser la methode fs.createReadStream()
 */
