
document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector('.fixed-nav').offsetHeight;
    document.body.style.marginTop = navbarHeight + 'px';
    navEffect();
});

function navEffect() {
    document.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var experiencePosition = document.getElementById("experience").offsetTop;
        var projectsPosition = document.getElementById("projects").offsetTop;
        var contactPosition = document.getElementById("contact").offsetTop;
        var experienceLink = document.querySelector('a[href="#experience"]');
        var projectsLink = document.querySelector('a[href="#projects"]');
        var contactLink = document.querySelector('a[href="#contact"]');

        experienceLink.classList.remove("active");
        projectsLink.classList.remove("active");
        contactLink.classList.remove("active");

        if (scrollPosition < projectsPosition) {
            experienceLink.classList.add("active");
        } else if (scrollPosition >= projectsPosition && scrollPosition < contactPosition) {
            projectsLink.classList.add("active");
        } else {
            contactLink.classList.add("active");
        }
    });
}

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

function copyEmail() {
    const copyText = 'javier.victorianor@gmail.com';  // Aquí puedes poner el texto que deseas copiar

    const textarea = document.createElement('textarea');
    textarea.value = copyText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const copyNotification = document.getElementById('copyNotification');
    copyNotification.style.display = 'inline-block';
    setTimeout(function() {
        copyNotification.style.display = 'none';
    }, 2000);

}