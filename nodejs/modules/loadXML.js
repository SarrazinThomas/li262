// Charger le module url
const fs = require('fs');
const xml2js = require('xml2js');

exports.getUsers = function (cb) {
    fs.readFile('./ressources/exemple.xml', 'utf-8', function (err, data) {
        if (err) {
            cb(err);
        } else {
            // On charge le XML
            const utilisateurs = [];
            xml2js.parseString(data, function (err2, result) {
                if (err2) {
                    cb(err);
                }
                const nUsers = result.utilisateurs.utilisateur;
                for (let i = 0; i < nUsers.length; i++) {
                    const user = {};
                    (nUsers[i].$ !== null) ? user.id = nUsers[i].$.id : "0";
                    user.nom = nUsers[i].nom;
                    user.prenom = nUsers[i].prenom;
                    utilisateurs.push(user);
                }
            });
            cb(null, utilisateurs);
        }
    });
};

