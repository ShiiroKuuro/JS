let x = prompt("Saisissez un nombre: ");
let resultat = 1;
for (i=1; i<=10; i++) {
    resultat = x * i; //resultat *= i veut dire resultat = resultat * i
    console.log(x+"*"+i+" = "+resultat);
}