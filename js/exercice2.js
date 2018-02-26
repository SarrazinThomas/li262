/*
let pere = {"id":2, "prenom":"felix", "nom":"sportelli"};
console.log(pere);
const commande = [123,456,789];
pere.commande = commande;
pere.lunette = true;
(pere.lunette)?console.log("binoclard!"):console.log("bonne vue");

let enfant = {"id":3, "prenom":"thomas", "nom":"sarrazin"};

pere.enfant = enfant;

let tabEnfants = [];
const enf1= {"prenom":"leo", "nom":"sportelli"};
const enf2= {"prenom":"lea", "nom":"sportelli"};
const enf3= {"prenom":"louis", "nom":"sportelli"};
tabEnfants.push(enf1,enf2,enf3);

let disbonjour = function (){
    console.log("Bonjour");
    
}

pere.disbonjour = disbonjour();

for (let i=0; i < tabEnfants.length; i++){
    console.log("enfant : " + tabEnfants[i].prenom);    
}

pere.getNbrCmd = function () {
    return this.commande.length;
}
pere.ajoutCmd = function (newCmd){
    this.commande.push(newCmd);
}

console.log(pere.getNbrCmd);
*/

let client = {"age" : 18};

let isMajeur = function () {
    return (this.age>=18)?console.log("Mon client est majeur"):console.log("Mon client est mineur");    
}

client.isMajeur = isMajeur;

client.isMajeur();

