//import {Personne} from './Personne.js';
let tabPersonnes = [];
const inputNom = document.querySelector("#nom");
const inputPrenom = document.querySelector("#prenom");
const inputAge = document.querySelector("#age");
const buttonAjout = document.querySelector("#ajout");
const tBody = document.querySelectorAll("tbody")[0];

function afficheTabPers(tabPersonnes) {
    //  let contenu="";
    while (tBody.firstChild) {tBody.removeChild(tBody.firstChild);}
    tabPersonnes.forEach(p => {
        const tr        = document.createElement("tr");
        const td1       = document.createElement("td");
        const td2       = document.createElement("td");
        const td3       = document.createElement("td");
        const td4       = document.createElement("td");
        const td5       = document.createElement("td");
        const input     = document.createElement("input");
        td1.innerHTML   = p.id;
        td2.innerHTML   = p.nom;
        td3.innerHTML   = p.prenom;
        td4.innerHTML   = p.age;
        input.type      = "button";
        input.id        = 'P'+p.id;
        input.value     = "X";
        td5.appendChild(input);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tBody.appendChild(tr);
    });
    const tabInputButtonSuppr = tBody.querySelectorAll("input");
    tabInputButtonSuppr.forEach(button => {
        button.addEventListener("click",function() {
            del(button.id);
        });
    });
}

function add(personne) {
    tabPersonnes.push(personne);
    afficheTabPers(tabPersonnes);
}

/*
function del(buttonId){
    let i=0;
    tabPersonnes.forEach(p => {
        (('P'+p.id)==buttonId)?tabPersonnes.splice(i,1)&&afficheTabPers(tabPersonnes):i++;
    });
}
*/
function del(buttonId) {
    let i=0;
    tabPersonnes.forEach(p => {
        (('P'+p.id)==buttonId)?(tabPersonnes.splice(i,1)&&tBody.deleteRow(i)):i++;
    });
}



buttonAjout.addEventListener("click",function() {
const xhttp = new XMLHttpRequest();
const url = "../php/serveur.php?nom="+inputNom.value+"&prenom="+inputPrenom.value+"&age="+inputAge.value;
    
    xhttp.open("GET",url,true);
    xhttp.send();
    xhttp.onload = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
            const p = JSON.parse(this.response);
            add(p);
        }
    }
});
