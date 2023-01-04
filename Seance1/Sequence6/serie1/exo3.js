let date = new Date(2012, 0, 3);

function getLocalDay(pDate) {
    let resultat = 0;
    if (pDate.getDay()!= 0) {
        resultat = pDate.getDay();
    }
    else {
        resultat = 7;
    }
    resultat = pDate.getDay();
    return resultat;
}

console.log(getLocalDay(date));