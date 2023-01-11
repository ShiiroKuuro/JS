jQuery(document).ready(function() {
    console.log('JQuery est bien chargé et la page prête!');
});

jQuery(document).ready(function() {
    console.log('JQuery est bien chargé et la page prête!');
    $('#chargement').hide();
    $('#contenu').show();
})

jQuery('#zoom').click(function() {
    console.log('click sur zoom');
    $('img').each(function() {
        console.log('une image trouvée! à zoomer');
        $(this).css('height', '100vh');
    })
    $('#zoom').prop('disabled', true);
    $('#dezoom').prop('disabled', false);
})

jQuery('#dezoom').click(function() {
    console.log('click sur dezoom');
    $('img').each(function() {
        console.log('une image trouvée! à dézoomer');
        $(this).css('height', '25vh');
    })
    $('#dezoom').prop('disabled', true);
    $('#zoom').prop('disabled', false);
})

$(document).keyup(function(touche) {
    var appui = touche.which || touche.keyCode;
    console.log(appui);
})