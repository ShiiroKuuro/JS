// let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date = new Date(2012, 0, 3);

function getWeekDay(pDate) {
    // return weekday[pDate.getDay()];
    // console.log(day);
    let resultat = "";
    switch(pDate.getDay()){
        case 0:resultat = "SU";
            break;
        case 1:resultat = "MO";
            break;
        case 2:resultat = "TU";
            break;
        case 3:resultat = "WE";
            break;
        case 4:resultat = "TH";
            break;
        case 5:resultat = "FR";
            break;
        case 6:resultat = "SA";
            break;    
    }
    return resultat;

}

console.log(getWeekDay(date));