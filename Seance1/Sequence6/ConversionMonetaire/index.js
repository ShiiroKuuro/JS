let btnsChiffre = document.querySelectorAll(".btnchiffre");
let btnsigne = document.querySelector(".btnsigne");
let btnclear = document.querySelector('.btnclear');
let btnconversion = document.querySelector('.conversion');
// let saisie = document.querySelector('.saisie');
// let valeurconvertie = document.querySelector('.valeurconvertie');


function addChiffre(event) {
    let saisie = document.querySelector('.saisie');
    console.log(event.srcElement);
    saisie.value += event.srcElement.value;
}
function addSigne(event) {
    let saisie = document.querySelector('.saisie');
    // console.log(event.srcElement);
    saisie.value += event.srcElement.value;
}
function deleteSpace(event) {
    let saisie = document.querySelector('.saisie');
    saisie.value="";
}
function convertir(event) {
    let saisie = document.querySelector('.saisie');
    let valeurconvertie = document.querySelector('.valeurconvertie');
    let resultat =  eval(saisie.value);
    valeurconvertie.innerHTML = resultat;
    saisie.value =resultat;
    // console.log(valeurconvertie);
}

function dollarVersEuro(montant) {
    return montant/1.06;
}
function couronneVersEuro(montant) {
    return montant/151;
}
function euroVersDollar(montant) {
    return montant*1.06;
}
function euroVersCouronne(montant) {
    return montant*151;
}

function convertir(event)
{
    // récupération du montant de départ depuis le champ de saisie
    let montantCouronne= document.querySelector('#montantDepart');
    // le montant est passé de couronne a euro
    let montantEuro = couronneVersEuro(montantCouronne.value)
    // récupération du mchamp ou va être mis le résulat
    let montantDollars = document.querySelector('#montantArrivee');
    // le montant est passé d'euro a dollar
    montantDollars.value = euroVersDollar(montantEuro);
}

btnsChiffre.forEach(btnchiffre=>{
    btnchiffre.addEventListener('click', addChiffre);
}
);
btnsigne.addEventListener('click', addSigne);
btnconversion.addEventListener('click', convertir);
btnclear.addEventListener('click', deleteSpace);

