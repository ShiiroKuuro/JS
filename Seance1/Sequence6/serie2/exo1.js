function afficherLeMois(event) {
    let ajd = new Date();
    let date = ajd.getDate();
    let month = ajd.getMonth();
    let newMois;
    if ((day >= 22 && month == 8) || (day <= 21 && month == 9)) {
        newMois = "Vendémiaire";
    }
    if ((day >= 22 && month == 9) || (day <= 21 && month == 10)) {
        newMois = "Brumaire";
    }
    if ((day >= 22 && month == 10) || (day <= 21 && month == 11)) {
        newMois = "Frimaire";
    }
    
    if ((day >= 22 && month == 11) || (day <= 20 && month == 0)) {
        newMois = "Nivôse";
    }
    if ((day >= 21 && month == 0) || (day <= 19 && month == 1)) {
        newMois = "Pluviôse";
    }
    if ((day >= 20 && month == 1) || (day <= 21 && month == 2)) {
        newMois = "Ventôse";
    }
    if ((day >= 22 && month == 2) || (day <= 19 && month == 3)) {
        newMois = "Germinal";
    }
    if ((day >= 20 && month == 3) || (day <= 19 && month == 4)) {
        newMois = "Floréal";
    }
    if ((day >= 20 && month == 4) || (day <= 18 && month == 5)) {
        newMois = "Prairial";
    }
    if ((day >= 19 && month == 5) || (day <= 18 && month == 6)) {
        newMois = "Messidor";
    }
    if ((day >= 19 && month == 6) || (day <= 17 && month == 7)) {
        newMois = "Thermidor";
    }
    if ((day >= 18 && month == 7) || (day <= 17 && month == 8)) {
        newMois = "Fructidor";
    }
    if ((day > 17 && month == 8) || (day < 22 && month == 9)) {
        newMois = "Jour Supplémentaire";
    }
}