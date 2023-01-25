class Classe {
    intitule;
    listeStagiaire = new Array();
    dateDebut;
    dateFin;

    constructor(intitule="",dateDebut="",dateFin="") {
        this.intitule = intitule;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
    }

    ajouterStagiaire(stagiaire) {
        this.listeStagiaire.push(stagiaire);
        return this.listeStagiaire;
    }
}