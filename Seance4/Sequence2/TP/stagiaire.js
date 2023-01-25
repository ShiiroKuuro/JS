class Stagiaire {
    nom;
    prenom;

    constructor(prenom="",nom="") {
        this.prenom = prenom;
        this.nom = nom.toUpperCase();
    }

    salutation() {
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }
}