import {Personne} from './Personne.js';
let tabPersonnes = [];
const inputNom = document.querySelector("#nom");
const inputPrenom = document.querySelector("#prenom");
const inputAge = document.querySelector("#age");
const buttonAjout = document.querySelector("#ajout");

function add(personne){
    tabPersonnes.push(personne);
    afficheTabPers(tabPersonnes);
    console.log(tabPersonnes);
}

function del(buttonId){
    let i=0;
    tabPersonnes.forEach(p => {
        (('P'+p.id)==buttonId)?tabPersonnes.splice(i,1)&&afficheTabPers(tabPersonnes):i++;
    });
}

function afficheTabPers(tabPersonnes){
    const tBody = document.querySelectorAll("tbody")[0];
    let contenu="";
    let i=1;
    tabPersonnes.forEach(p => {
        p.id = i;
        contenu +="<tr>";
        contenu +="<td>" + p.id + "</td>";
        contenu +="<td>" + p.nom + "</td>";
        contenu +="<td>" + p.prenom + "</td>";
        contenu +="<td>" + p.age + "</td>";
        contenu +="<td><input type='button' id='P"+p.id+"' value='X'</td>";
        contenu +="</tr>";
        i++;
    });
    tBody.innerHTML=contenu;
    const tabInputButtonSuppr = tBody.querySelectorAll("input");
    tabInputButtonSuppr.forEach(button => {
        button.addEventListener("click",function(){
            del(button.id);
        });
    });
}

buttonAjout.addEventListener("click",function(){
//    let personne = new Personne((tabPersonnes.length+1),inputNom.value,inputPrenom.value,inputAge.value);

    
add(personne);
})