// Charger le module http
const http = require('http');

// Charger le module url
const url = require('url');


http.createServer(function (requete, reponse) {
    console.log("requete recu");
    reponse.writeHead(200, {"Content-Type": "text/html"});
    const reqUrl = requete.url;
    console.log("url appelee : " + reqUrl);
    console.log("methode appelee : " + requete.method);
    //  reponse.write("Allo<br />")

    const urlObject = url.parse(reqUrl, true);
    reponse.write("url appelee : " + urlObject.pathname + "<br />");
    for (const key in urlObject.query) {
        reponse.write("- " + key + " -> " + urlObject.query[key] + "<br />");
    }
    console.log(urlObject);
    reponse.end("au revoir");

}).listen(3000);
