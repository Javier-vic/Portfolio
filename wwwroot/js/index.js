$(document).ready(function () {
    console.log('El DOM está listo.');

});


function experienceButton(id) {
    var button = document.getElementById(id);
    var allButtons = document.querySelectorAll('.experience-button');
    allButtons.forEach(function (btn) {
        btn.classList.remove('experience-selected');
    });
    button.classList.add('experience-selected');

    var text = document.querySelector('.'+id);
    var allTexts = document.querySelectorAll('.experience-text');
    allTexts.forEach(function (txt) {
        txt.classList.add('d-none');
    });
    text.classList.remove('d-none');
}