let user = {"id":1, "nom":"sarrazin", "prenom":"thomas"};

function extractObject(utilisateur) {
    return {"id" : utilisateur.id, "nom" : utilisateur.nom};
}

function extractTab(utilisateur) {
    return [utilisateur.id, utilisateur.nom];
}

console.log(extractTab(user));
console.log(extractObject(user));

let [id,nom] = extractTab(user);
console.log("id = "+id);
console.log("nom = "+nom);