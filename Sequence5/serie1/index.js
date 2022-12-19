function cacherImg(event) {
    // sur mouse Event :  event.srcElement
    // event.srcElement.style.visibility="hidden";
    event.srcElement.style.display="none";
}
/*
let image1= document.querySelector('#image1');
image1.addEventListener('dblclick',cacherImg)
*/
let images =document.querySelectorAll('img');
images.forEach(image=>{
    image.addEventListener('dblclick',cacherImg);
})

function cacherImages() {
    let images = document.querySelectorAll('img')
    images.forEach(image=>{
        image.style.display = 'none';
    })
}
let bouton = document.querySelector('.masquer');
bouton.addEventListener('click', cacherImages);

function afficherImages() {
    let images = document.querySelectorAll('img')
    images.forEach(image=>{
        image.style.display = 'block';
    })
}
let bouton2 = document.querySelector('.afficher');
bouton2.addEventListener('click', afficherImages);

function desactiverDouble() {
    let images = document.querySelectorAll('img')
    images.forEach(image=>{
        image.removeEventListener('dblclick', cacherImg);
    })
}

function activerDouble() {
    let images =document.querySelectorAll('img');
    images.forEach(image=>{
        image.addEventListener('dblclick',cacherImg);
    })
}

let bouton3 = document.querySelector('.activer');
bouton3.addEventListener('click', activerDouble);

let bouton4 = document.querySelector('.desactiver');
bouton4.addEventListener('click', desactiverDouble);

// document.QuerySelector(‘’)