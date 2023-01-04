let n = prompt("Saisissez un nombre d'étoiles:");

if (n>=1 && n<11) {
    for (i=1; i<n; i++){
    console.log("*".repeat(n));
    }
}
else {
    console.log("Le nombre d'étoiles n'est pas correct, saisissez un nombre d'étoiles: ");
}