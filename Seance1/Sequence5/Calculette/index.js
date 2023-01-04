// const boutons=document.querySelectorAll(".bouton");

// for(let i = 0; i < boutons.length; i++) {
// 	boutons[i].addEventListener("click", function(){
//         $.ajax({
//             url:'test.php',
//             type: 'POST',
//             data: {amount: this.value},
//             success: function (json_data) {
//                 window.location.replace(json_data);
//             },
//             error: function() {
//                 console.log("data not found");
//             }
//         });
//     })
// }


//DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.key.toString();
    calculer(valeur)
}) 

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);    
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;


        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul:' + e.message)
});


// CORRECTION DU PROF

// function ajouterOperation(event) {
//     let tampon = document.querySelector('#tampon');
//     console.log(event.srcElement);
//     tampon.value += event.srcElement.value;
// }
// function ajouterChiffre(event) {
//     let tampon = document.querySelector('#tampon');
//     console.log(event.srcElement);
//     tampon.value += event.srcElement.value;
// }
// function evaluerExpression(event) {
//     let tampon = document.querySelector('#tampon');
//     let ecran = document.querySelector('#ecran');
//     let resultat =  eval(tampon.value);
//     ecran.innerHTML =resultat;
//     tampon.value =resultat;
//     console.log(ecran);
// }
// function effacerExpression(event)
// {
//     let tampon = document.querySelector('#tampon');
//     tampon.value="";
// }
// function effacerLastExpression(event)
// {
//     let tampon = document.querySelector('#tampon');
//     tampon.value=tampon.value.substring(0, tampon.value.length - 1);;
// }
// let boutonsOperateur = document.querySelectorAll('.btn_operateur');
// let boutonsChiffre = document.querySelectorAll('.btn_chiffre');
// let boutonEgal = document.querySelector('#btn_egal');
// let boutonClear = document.querySelector('#btn_effacer');
// let boutonClearLast = document.querySelector('#btn_effacer_last');

// let ecran = document.querySelector('#ecran');
// let tampon = document.querySelector('#tampon');

// boutonsOperateur.forEach(boutonOperateur=>{
//     boutonOperateur.addEventListener('click',ajouterOperation);
// }
// );
// boutonsChiffre.forEach(boutonChiffre=>{
//     boutonChiffre.addEventListener('click',ajouterChiffre);
// }
// );
// boutonEgal.addEventListener('click',evaluerExpression);
// boutonClear.addEventListener('click',effacerExpression);
// boutonClearLast.addEventListener('click',effacerLastExpression);