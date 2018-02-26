/*
export let afficheTemplates = () => {
    return "ceci est un template";
};
*/

class Personne {
    constructor(nom,prenom,age = 32){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    get nomComplet(){
        return this.nom+" "+this.prenom;
    }
    getNomComplet(){
        return this.nom+" "+this.prenom;
    }

}

class Client extends Personne {
    constructor(numClient, nom, prenom, age){
        super(nom,prenom,age);
        this.numClient = numClient;
        this.commandes = [];
    }

    get ca(){
        let ca = 0;
        for (let i = 0; i < this.commandes.length; i++){
            ca += this.commandes[i].prix;
        }
        return ca;
    }

    ajoutCommande(cmd){
        this.commandes.push(cmd);
    }

}
/*
let moi = new Personne("SARRAZIN","Thomas",25);
console.log(moi);
console.log(moi.getNomComplet()); // SARRAZIN Thomas
let felix = new Client (1,"SPORTELLI","Felix","32");
console.log(felix);
*/

let c = new Client (1,"SPORTELLI","Felix","32");

class Commande {
    constructor (numClient, produit, prix){
        this.numClient = numClient;
        this.produit = produit;
        this.prix = prix;
    }
        
}

com = new Commande (1, "crayon", 5);
com2 = new Commande (2, "papier", 10);

c.ajoutCommande(com);
c.ajoutCommande(com2);

console.log(c.ca);