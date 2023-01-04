// let min=1;
// let max=5;
let random = Math.round(Math.random() * 5) + 1;
let essai = 0;

console.log(random);
let n = prompt("Veuillez saisir un nombre entre 1 et 5: "); 
while (essai< 2) {
    if (n < random) {
        console.log("Trop petit! Entrez un nouveau nombre");
    }
    else if (n > random) {
        console.log("Trop grand! Entrez un nouveau nombre");
    }
    else if (n == random) {
        console.log("Bien joué!");
        break;
    }
    essai++;
    n = prompt("Veuillez saisir un nouveau nombre");
}
if (essai === 2){
    console.log("Vous avez échoué! Le nombre était: "+random);
}