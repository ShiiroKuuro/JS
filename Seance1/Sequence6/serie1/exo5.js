// FONCTION getLastDayOfMonth( pANNEE, pIndiceMOIS) 
// //pIndiceMOIS va de 0 a 11
// DEBUT
//     MOIS = pIndiceMOIS+1
//     ANNEE = pANNEE
//     SI MOIS>11 ALORS
//         MOIS =0
//         ANNNE = ANNEE +1
//     FIN SI
//     DATE = new Date(ANNEE,MOIS,1)
//     DERNIERJOUR = getDateAgo(DATE,1)
//     RETOURNE DERNIERJOUR.NUMERO_JOUR // ici regardez getDate()
// FIN
function getLastDayOfMonth( pANNEE, pIndiceMOIS)
{
    let mois = pIndiceMOIS+1;
    let annee = pANNEE;
    if(mois > 11) {
        mois = 0;
        annee = annee + 1;
    }
    let date = new Date(annee, mois, 1);
    let dernierJour = getDateAgo(date, 1);
    return dernierJour.getDate();
}

function getDateAgo(pDate,pNombreJours)
{
    // on enleve le nombre de jours converti en milli seconde
    let resultat = pDate-(24*60*60*1000)*pNombreJours;
    // resultat contient la date cherchée sous forme de 
    // milli secondes
   // console.log(pDate.getTime());
   // console.log(resultat);
    // a partir des milli secondes depuis 1/1/1970 on crée la date
    return new Date(resultat);
}

console.log('getLastDayOfMonth(2022,11) doit donner 31');
console.log(getLastDayOfMonth(2022,11));
console.log((getLastDayOfMonth(2022,11)==31));

console.log('getLastDayOfMonth(2022,1) doit donner 28');
console.log(getLastDayOfMonth(2022,1));
console.log((getLastDayOfMonth(2022,1)==28));

console.log('getLastDayOfMonth(2021,5) doit donner 30');
console.log(getLastDayOfMonth(2022,5));
console.log((getLastDayOfMonth(2022,5)==30));