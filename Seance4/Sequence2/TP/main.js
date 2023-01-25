// ETAPE 1
// let stagiaire1 = ['Martin','DUPONT'];
// let stagiaire2 = ['Vincent','MARTIN'];
// let stagiaires = [stagiaire1,stagiaire2];
// console.log(stagiaires);
// console.log(stagiaires[1][0]);

// ETAPE 2

// let stagiaireA = new Stagiaire();
// stagiaireA.nom = "DUPONT";
// stagiaireA.prenom = "Martin";
// let stagiaireB = new Stagiaire();
// stagiaireB.nom = "MARTIN";
// stagiaireB.prenom = "Vincent";

// let stagiairestab = [stagiaireA,stagiaireB];
// console.log(stagiairestab);
// console.log(stagiairestab[1].prenom);

// ETAPE 3

// console.log(stagiairestab[0].salutation());

// ETAPE 4

// let anotherStagiaire = new Stagiaire("Lucette","Anderson");
// console.log(anotherStagiaire);

// EXO 2

// let anotherStagiaire = new Stagiaire("Lucette","Anderson");
// let anotherStagiaire2 = new Stagiaire("Martin","LUTHER")
// console.log(anotherStagiaire);
// let stagiairestab = [anotherStagiaire, anotherStagiaire2];
// let classe = new Classe("DWWM-14",new Date(2022, 09, 01),new Date(2023, 05, 25));
// classe.ajouterStagiaire(stagiairestab[0]);
// classe.ajouterStagiaire(stagiairestab[1]);
// console.log(classe);

var stage;

let btncreer = document.querySelector('#creer');
btncreer.addEventListener('click', creerStage);
let btnafficher = document.querySelector('#afficher');
btnafficher.addEventListener('click', afficherStage);

function creerStage(event) {
    event.preventDefault();
    let debut = document.querySelector('#datedebut').value;
    let fin = document.querySelector('#datefin').value;
    stage = new Classe("DWWM-14",new Date(debut),new Date(fin));
}

function afficherStage(event) {
    event.preventDefault();
    console.log(stage);
}

// console.log(stage)