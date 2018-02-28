// Charger le module url
const fs = require('fs');
const xml2js = require('xml2js');

fs.readFile('./ressources/exemple.xml', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // On charge le XML

        xml2js.parseString(data, function (err2, result) {
            if (err2) {
                console.log(err2);
            }
            const nUsers = result.utilisateurs.utilisateur;
            const utilisateurs = [];
            for (let i = 0; i < nUsers.length; i++) {
                const user = {};
                (nUsers[i].$ !== null) ? user.id = nUsers[i].$.id : "0";
                user.nom = nUsers[i].nom;
                user.prenom = nUsers[i].prenom;
                utilisateurs.push(user);
            }
            console.log(utilisateurs[0]);
            console.log(utilisateurs[1]);
        });
    }
});
