let tableaufr = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];
let tableauen = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
let tableaues = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

function tableaufinal(){
    for (i=0; i<12; i++){
        console.table(tableaufr[i] + " " + tableauen[i] + " " + tableaues[i]);
    }
}
tableaufinal();