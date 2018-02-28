function del(tabPersonnes, buttonId) {
    let i = 0;
    const tBody = document.querySelectorAll("tbody")[0];
    tabPersonnes.forEach(p => {
        (('P' + p.id) === buttonId) ? (tabPersonnes.splice(i, 1) && tBody.deleteRow(i)) : i++;
    });
}

function afficheUsers(tabPersonnes) {
    const tBody = document.querySelectorAll("tbody")[0];
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }
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
        input.id        = 'P' + p.id;
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
        button.addEventListener("click", function () {
            del(tabPersonnes, button.id);
        });
    });
}


$(document).ready(function () {
    let users = [];
    $.ajax(
        {
            "url": "../php/multi_users.php",
            "type": "GET"
        }
    ).done(function (data) {
        users = JSON.parse(data);
        afficheUsers(users);
    }).fail(function () {
        console.log("Impossible de contacter le serveur");
    }).always(function () {
        console.log("Je m'affiche toujours");
    });
});


