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
    const valeur = e.keyCode.toString();
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