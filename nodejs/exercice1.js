// Charger le module http
const http = require('http');

http.createServer(function (requete, reponse) {
    console.log("requete recu");
    reponse.writeHead(404, {"Content-Type": "text/html"})
    reponse.write("Allo<br />")
    reponse.end("bonjour");
}).listen(3000);
