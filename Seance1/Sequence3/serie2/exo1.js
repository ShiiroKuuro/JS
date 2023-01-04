let n = prompt("Saisissez un nombre d'étoiles:");

function nbetoile(){
    if (n>=1 && n<11) {
        console.log("*".repeat(n));
    }
    else {
        console.log("Le nombre d'étoiles n'est pas correct, saisissez un nombre d'étoiles: ");
    }
}

nbetoile(n);