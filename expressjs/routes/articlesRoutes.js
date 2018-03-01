const express = require('express');
const router = express.Router();
const config = require('../config.json');


router.get('/', function (req, res) {
    const users = ["patate", "frites", "steack"];
    res.json(users);
});

router.get('/:id', function (req, res) {
    res.json({"id_recu": req.params.id});
});

router.post('/', function (req, res) {
    const produit = {};
    produit.nom = req.body.nom;
    produit.prix = req.body.prix;

    (produit.prix <= config.prixMax) ? res.write("Une requete post est arrivée : " + JSON.stringify(produit)) : res.write("Prix trop élevé") && res.status(500);
    res.end();
});

router.get('/test/allo', function (req, res) {
    res.render("article");
});

module.exports = router;
