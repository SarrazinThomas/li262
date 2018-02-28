// Charger le module http
const http = require('http');

// Charger le module url
const fs = require('fs');
const url = require('url');

http.createServer(function (requete, reponse) {
    reponse.writeHead(200, {"Content-Type": "text/html"});
    const reqUrl = requete.url;
    console.log("url appelee : " + reqUrl);
    const urlObject = url.parse(reqUrl, true);
    let data = "";
    for (const key in urlObject.query) {
        data = key + ":" + urlObject.query[key] + "\n";

        fs.appendFile("./access.log", data, function (err) {
            if (err) {
                console.log(err);
            } else {
                reponse.end("au revoir");
            }
        });
        if (key === "delete" && urlObject.query[key] === "true") {
            fs.unlink("./access.log", function (err) {
                if (err) {
                    console.log(err);
                } else {
                    reponse.end("au revoir");
                }
            });
        }
    }

}).listen(3000);
