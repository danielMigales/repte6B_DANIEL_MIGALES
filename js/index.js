/*punt 2. A l'inici del codi de javaScript (index.js) existeixen tres arrays:
- reis: els noms dels diferents rei (que coincideixen amb els noms de les diferents imatges disponibles a la carpeta img).
- principi: l’any on comença el regnat de cada rei.
- final: l’any on finalitza el regnat de cada rei.*/

var reis = ["ataulfo", "teodorico", "atanagildo", "leogivildo", "sisebuto", "recesvinto", "ervigio"];
var principi = [410, 418, 555, 571, 612, 653, 680];
var final = [415, 451, 567, 586, 621, 672, 687];

window.onload = inici;

function inici() {
    document.querySelector("#boton0").onclick = botoInici; //punt 4
    document.querySelector("#boton1").onclick = ordreInvers; //punt 5
    document.querySelector("#boton2").onclick = regnatTolosa; //punt 6
    document.querySelector("#boton3").onclick = regnatArria; //punt 7
    document.querySelector("#boton4").onclick = regnatCatolic; //punt 8
    document.querySelector("#boton5").onclick = regnatSuperior; //punt 9
    carregarImatgesInici(); //punt 3
}

/*punt 3. Inicialment el <DIV> anomenat “caixa_imatges” està buit, però en iniciar la pàgina i de manera automàtica 
s'afegeixen tantes imatges <IMG> com valors existeixin a l’array reis,  utilitzant FOR OF. L’ordre en el que han de 
mostrar-se és el que figura als arrays inicials.

Amb bonus track (per pujar nota): Es mostren les imatges amb el nom i la dates del regnat
de cada rei a sota de la imatge (com passarà als punts posteriors).*/

function carregarImatgesInici() {
    colorsBotons(0);//crida a la funcio que posa color al boto
    var contador = -1;
    for (let rei of reis) {
        contador++;
        document.getElementById("caixa_imatges").innerHTML +=
            `<div class="rei">
                <img src="img/${rei}.png">
                <div class='nom_rei'>${rei.substr(0, 1).toUpperCase() + rei.substr(1).toLowerCase()}</div> 
                <div class="regnat">(${principi[contador]}-${final[contador]})</div>  
            </div>`;
    }
}

//punt 4. En fer clic al primer <BUTTON> “inici” executa les mateixes accions que es realitzen al punt anterior.

function botoInici() {
    colorsBotons(0);//crida a la funcio que posa color al boto
    buidarDiv(); //buido el div perque no s'afegeixin mes dades
    carregarImatgesInici(); //crida al metode inicial
}

/*punt 5. En fer clic al segon <BUTTON> “Des de l’actualitat” s’eliminarà tot el contingut i es mostraran tots els reis 
(amb el seu nom i regnat a sota), però en un ordre cronològic invers (és a dir començarà des del final). 
En aquest punt s’haurà d’utilitzar FOR.*/

function ordreInvers() {
    colorsBotons(1);//crida a la funcio que posa color al boto
    buidarDiv(); //s'elimina tot el contingut
    //recorro l'array inversament
    for (let i = reis.length - 1; i >= 0; i--) {
        document.getElementById("caixa_imatges").innerHTML +=
            `<div class="rei">
                <img src="img/${reis[i]}.png">
                <div class='nom_rei'>${reis[i].substr(0, 1).toUpperCase() + reis[i].substr(1).toLowerCase()}</div>
                <div class="regnat">(${principi[i]} - ${final[i]})</div>
            </div>`;
    }
}

/*punt 6. En fer clic al tercer <BUTTON> “Regnet Tolosà” s’eliminarà tot el contingut i es mostrarà la imatge (i a sota el nom i regnat) 
dels dos primers valors (reis) de l’array utilitzant FOREACH.*/

function regnatTolosa() {
    colorsBotons(2);//crida a la funcio que posa color al boto
    buidarDiv(); //s'elimina contingut del div
    //forEach que mostra els dos primers valors
    reis.forEach(reisTolosans);
    function reisTolosans(valor, posicio, valors) {
        //per mostrar nomes els dos primers valors poso un if
        if (posicio <= 1) {
            document.getElementById("caixa_imatges").innerHTML +=
                `<div class="rei">
                    <img src="img/${valor}.png">
                    <div class='nom_rei'>${valor.substr(0, 1).toUpperCase() + valor.substr(1).toLowerCase()}</div>
                    <div class="regnat">(${principi[posicio]} - ${final[posicio]})</div>
                </div>`;
        }
    }
}

/* punt 7. En fer clic al quart <BUTTON> “Regnat Arrià” s’eliminarà tot el contingut i es mostrarà la imatge (i a sota el nom) dels reis 
que van des del tercer valor fins al quart, és a dir els valors [2] i [3]. En aquest punt s’ha d’utilitzar FOR.*/

function regnatArria() {
    colorsBotons(3);//crida a la funcio que posa color al boto
    buidarDiv(); //s'elimina contingut del div
    //bucle for mostrant segon i tercer valor de l'array reis
    for (let i = 0; i < reis.length; i++) {
        //per mostrar nomes els valors : segon i tercer de l'array poso un if
        if (i == 2 || i == 3) {
            document.getElementById("caixa_imatges").innerHTML +=
                `<div class="rei">
                <img src="img/${reis[i]}.png">
                <div class='nom_rei'>${reis[i].substr(0, 1).toUpperCase() + reis[i].substr(1).toLowerCase()}</div>
                <div class="regnat">(${principi[i]}-${final[i]})</div>  
            </div>`;
        }
    }

    /*Bonus track: Per pujar nota intenta tenir el mateix resultant utilitzant WHILE.*/

    // var contador = 2;
    // while (contador == 2 || contador == 3) {
    //     contador++;
    //     let estructuraDiv = `<div class="rei"><img src="img/${reis[contador]}.png"><div class='nom_rei'>${reis[contador]}</div><div class="regnat">(${principi[contador]}-${final[contador]})</div></div>`;
    //     document.getElementById("caixa_imatges").innerHTML += estructuraDiv;
    // }
}

/*punt 8. En fer clic al cinquè <BUTTON> “Regnat Catòlic” s’eliminarà tot el contingut i es mostrarà la image (i a sota el nom i regnat) del últims 
3 valors de l’array. En aquest punt s’ha d’utilitzar FOREACH.*/

function regnatCatolic() {
    colorsBotons(4);//crida a la funcio que posa color al boto
    buidarDiv(); //s'elimina contingut del div
    //forEach ultims 3 valors de l'array
    reis.forEach(ultimsReis);
    function ultimsReis(valor, posicio, valors) {
        if (posicio >= reis.length - 3) {
            document.getElementById("caixa_imatges").innerHTML +=
                `<div class="rei">
                <img src="img/${valor}.png">
                <div class='nom_rei'>${valor.substr(0, 1).toUpperCase() + valor.substr(1).toLowerCase()}</div>
               <div class="regnat">(${principi[posicio]}-${final[posicio]})</div>  
             </div>`;
        }
    }

    /*Bonus track: Per pujar nota intenta tenir el mateix resultant utilitzant DO WHILE.*/
    //AQUEST BUCLE NO FUNCIONA ENCARA
    // var contador = -1;  
    // do {
    //     contador++;
    //     document.getElementById("caixa_imatges").innerHTML +=
    //         `<div class="rei">
    //             <img src="img/${reis[contador]}.png">
    //             <div class='nom_rei'>${reis[contador]}</div>
    //            <div class="regnat">(${principi[contador]}-${final[contador]})</div>  
    //          </div>`;
    // } while ();
}

/* punt 9. En fer clic al sisè <BUTTON> “Més de 10 anys” s’eliminarà tot el contingut i es mostrarà la imatge (i a sota el nom i regnat) dels reis 
que han tingut un regnat superior als 10 anys. En aquest cas s’han d’utilitzar els valors dels arrays principi i final per conèixer els anys de
regnat de cada rei i MAP per recórrer els valors de l’array.*/

function regnatSuperior() {
    colorsBotons(5);//crida a la funcio que posa color al boto
    buidarDiv(); //s'elimina contingut del div
    //bucle map mostrant regnats de mes de 10 anys
    arrayRegnatSuperior = reis.map(calcular);
    function calcular(valor, posicio, valors) {
        let anys = Math.abs(principi[posicio] - final[posicio]); //aplico el math perque possi el numero en positiu
        //si anys es mayor de 10 imprimeix els div
        if (anys > 10) {
            let caixa_imatges =
                `<div class="rei">
                <img src="img/${valor}.png">
                <div class='nom_rei'>${valor.substr(0, 1).toUpperCase() + valor.substr(1).toLowerCase()}</div>
                <div class="regnat">(${principi[posicio]}-${final[posicio]})</div>
            </div>`;
            document.getElementById("caixa_imatges").innerHTML += caixa_imatges;
        }
        return caixa_imatges;
    }
}

//funcio per netejar el div caixa_imatges

function buidarDiv() {
    document.getElementById("caixa_imatges").innerHTML = "";
}

/*Nota:
Funcionalitats de l’exemple, com la primera lletra del nom del rei en majúscules (sense afegir
un altre array) o que al fer en clic en un botó aquest es quedi d’un color diferent a la resta,
no s’han de fer (encara que si algú vol pistes per poder-ho fer que m’ho digui pel foro i ho
explicaré).*/

//funcio per pintar els botons cada vegada que es faci click

function colorsBotons(boton) {
    //primer es comptem quants botons hi ha
    let totalBotons = document.querySelectorAll(".boton").length;
    //amb un bucle es recorren tots borrant el format i quan troba el que l'hi passo com parametre el pinta
    for (let i = 0; i < totalBotons; i++) {
        document.querySelectorAll(".boton")[i].style = null;
        if (i == boton) {
            document.querySelectorAll(".boton")[boton].style.backgroundColor = "white";
            document.querySelectorAll(".boton")[boton].style.color = "black";
        }
    }

    //La funcio per possar la primera lletra en majusculas,finalment no l'ha he fet a dins d'una funcio, sino que encara que sigui escriure i repetir molt mes codi l'he possat a la mateixa linea

}
