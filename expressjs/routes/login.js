const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
    const user = {};
    user.login = req.body.email;
    user.mdp = req.body.mdp;
    if (user.login !== "toto@gmail.com") {
        res.render("Form", {"error": "Mauvais login"});
    } else if (user.mdp !== "allo") {
        res.render("Form", {"error": "Mauvais mdp"});
    } else {
        res.render("Form", {"error": "Bienvenue"});
    }
});

module.exports = router;
