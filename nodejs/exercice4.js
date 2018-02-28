// Charger le module http
const http = require('http');

// Charger le module url
const fs = require('fs');


http.createServer(function (requete, reponse) {
    reponse.writeHead(200, {"Content-Type": "text/html"});
    const reqUrl = requete.url;
    console.log("url appelee : " + reqUrl);

    fs.readFile("./ressources/exemple.html", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            reponse.write(data);
        }
        reponse.end("au revoir");
    });
}).listen(3000);
