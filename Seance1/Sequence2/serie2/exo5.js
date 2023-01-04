//Exo 1:
let i1 = 1;
while (i1 < 11){
    if(i1%2==0){
        console.log("Le nombre "+i1+" est pair");
    }
    else{
        console.log("Le nombre "+i1+" est impair");
    }
    i1++;
}

//Exo 2:
let x2 = prompt("Saisissez un premier nombre: ");
let n = prompt("Saisissez un deuxième nombre: ");
let resultat2 = 1;
let i2 = 1;
while (i2<=n) {
    resultat2= resultat2 * x2;
    i2++;
}
console.log(resultat2);

//Exo 3:
let x3 = prompt("Saisissez un nombre: ");
let resultat3 = 1;
let i3 = 1;
while (i3<=x3) {
    resultat3 *= i3; //resultat *= i veut dire resultat = resultat * i
    i3++;
}
console.log(resultat3);

//Exo 4:
let x4 = prompt("Saisissez un nombre: ");
let resultat4 = 1;
let i4 = 1;
while (i4<=10) {
    resultat4 = x4 * i4; //resultat *= i veut dire resultat = resultat * i
    console.log(x4+"*"+i4+" = "+resultat4);
    i4++;
}