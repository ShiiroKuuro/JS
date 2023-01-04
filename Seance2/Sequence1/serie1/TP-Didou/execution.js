var bodyTag = document.body;
var p1Tag   = bodyTag.childNodes[3];
var bTag    = p1Tag.lastChild;
var p2Tag   = bodyTag.childNodes[5];
var imgTag  = p2Tag.firstChild;

console.log("p1Tag  : "+ p1Tag.innerHTML);
console.log("bTag   : "+ bTag.innerHTML);
console.log("imgTag : "+ imgTag.src);

let buttons = document.querySelectorAll('.btn_animal')

buttons.forEach(button=> {
    button.addEventListener('click', changer_img)

})
function changer_img(p_event) {

    console.log(p_event);
    console.log(p_event.srcElement.value);
    console.log(p_event.srcElement.id);
    let img = document.querySelector('#id_image')
    img.src = p_event.srcElement.value


    //id_quoi
    //innerText

    let texte = document.querySelector('#id_quoi')
    texte.innerText = p_event.srcElement.textContent

}

let images = document.querySelectorAll('.imganimal');
images.forEach(image => {
    image.addEventListener('mouseover',changerImageCaroussel);
});

function changerImageCaroussel(pEvent)
{
    let image = document.querySelector('#id_image');
    image.src = pEvent.srcElement.src

    let texte = document.querySelector('#id_quoi')
    texte.innerText = pEvent.srcElement.alt
}
