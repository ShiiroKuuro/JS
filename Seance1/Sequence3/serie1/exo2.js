let n = prompt("Saisissez un nombre d'étoiles:");

while (n<1 || n>10){
    n = prompt("Le nombre d'étoiles n'est pas correct, saisissez un nombre d'étoiles: ");
}
for (i=1; i<=n; i++){
    console.log("*".repeat(n));
}