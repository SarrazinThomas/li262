// Charger le module http
const http = require('http');

// Charger le module "module1"
const module1 = require('./modules/module1');

http.createServer(function (requete, reponse) {
    console.log("requete recu");
    reponse.writeHead(200, {"Content-Type": "text/html"})
//  reponse.write("Allo<br />")
    reponse.write(module1.disBonjour("Bonjour") + "<br />");
    reponse.end("au revoir");
}).listen(3000);
