// Charger le module http
const http = require('http');
const loadXML = require("./modules/loadXML.js");

http.createServer(function (requete, reponse) {
    console.log("requete recu");
    reponse.writeHead(200, {"Content-Type": "text/html"});
    loadXML.getUsers(function (err, data) {
        if (err) {
            reponse.write("Impossible de charger");
        } else {
            for (let i = 0; i < data.length; i++) {
                reponse.write("id = " + data[i].id + " ; nom = " + data[i].nom + " ; prenom = " + data[i].prenom + "<br />");
            }
            reponse.end("au revoir");
        }
    });
}).listen(3000);
