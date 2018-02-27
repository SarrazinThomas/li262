if (typeof(localStorage) !== null) {
    console.log("OK");

    if (localStorage.nb_visiteurs === null) {
        localStorage["nb_visiteurs"] = 0;
    } else {
        localStorage["nb_visiteurs"]++;
    }
    document.querySelector("#nb_visiteurs").innerHTML = localStorage["nb_visiteurs"];

    if (localStorage["utilisateur_courant"] != null) {
        document.querySelector("#form_login").className = "invisible";
    //    document.querySelector("#welcome").className = "";
        const user = JSON.parse(localStorage["utilisateur_courant"]);
        const p = document.createElement("p");
        p.innerHTML = "Bienvenue "+user.prenom+" "+user.nom;
        document.querySelectorAll("body")[0].appendChild(p);

    } else {
        document.querySelector("#form_login").className = "";
        document.querySelector("#connexion").onclick = function() {
            let user = {};
            user.nom = document.querySelector("#nom").value;
            user.prenom = document.querySelector("#prenom").value;
            localStorage["utilisateur_courant"]=JSON.stringify(user);
        };
    }


} else {
    console.log("NOK");
}