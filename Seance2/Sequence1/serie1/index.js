let boutonRandom = document.getElementById("random");
let boutonCouleur = document.getElementById("couleur");

const generateColor = () => {
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}
function black(){
    document.getElementById('couleur').style.color="black";
    document.getElementById('couleur').style.backgroundColor="white";
}
function white(){
    document.getElementById('couleur').style.color="white";
    document.getElementById('couleur').style.backgroundColor="black";
}
function changeColor(event) {
    if (document.getElementById('couleur').style.color == "black") {
        white();
    }
    else {
        black();
    }
}

boutonRandom.addEventListener("click", generateColor);
boutonCouleur.addEventListener("click", changeColor);

// EXO 3 (+5/6)

let button_h1 = document.querySelector('#h_1');
button_h1.addEventListener('click',ajouter_h1);

let button_p = document.querySelector('#p_1');
button_p.addEventListener('click',ajouter_paragraphe);





function ajouter_h1(pEvent)
{
    console.log('ajouter un titre');
    let new_h1 = document.createElement("h1");
    let titre = prompt('Nouveau titre?');
    new_h1.innerText = titre;
    let parent = document.querySelector('main');
    parent.appendChild(new_h1);
}


function masquer_para(event)
{
    console.log(event.srcElement.value);
    let paragraphe = document.querySelector('#'+event.srcElement.value)
    if (paragraphe.style.display == 'block') {
        paragraphe.style.display = 'none'
    }else {
        paragraphe.style.display = 'block'
    }
}

function supprimer_para(event) {
    let paragraphe = document.querySelector('#'+event.srcElement.value)
    paragraphe.remove()
    let button = document.querySelector('#'+event.srcElement.value)
    button.remove()
    let button_x = document.querySelector('#'+event.srcElement.value)
    button_x.remove()
}



function ajouter_paragraphe(pEvent)
{
    console.log('ajouter un paragraphe');
    indice++;
    let new_para = document.createElement("p");
    let texte = prompt('Saisisse le texte du paragraphe?');
    new_para.innerText = texte;
    new_para.style.display = 'block'
    new_para.id ="pouet"+indice;


    let new_button = document.createElement("button");
    let reveler = "masquer/reveler";
    new_button.innerText = reveler; 
    new_button.value="pouet"+indice;
    new_button.id ="pouet"+indice;
    new_button.addEventListener('click',masquer_para)


    let button_x = document.createElement("button");
    let supprimer = " x ";
    button_x.innerText = supprimer;
    button_x.value="pouet"+indice;
    button_x.id ="pouet"+indice;
    button_x.addEventListener('click', supprimer_para)
    

    let parent = document.querySelector('main');
    parent.appendChild(new_para);
    parent.appendChild(new_button);
    parent.appendChild(button_x)

}
var indice =0;

// EXO 4

let button_deroulant = document.querySelector('#btn_deroulant')
button_deroulant.addEventListener('click', masquer_derouler)

function masquer_derouler(p_event) {
    let paragraphes = document.querySelectorAll('p')
    paragraphes.forEach(paragraphe => {
        if (paragraphe.style.display == 'block') {
            paragraphe.style.display = 'none'
        }else {
            paragraphe.style.display = 'block'
        }
    });

}