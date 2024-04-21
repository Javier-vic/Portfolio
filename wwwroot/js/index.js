
document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector('.fixed-nav').offsetHeight;
    document.body.style.marginTop = navbarHeight + 'px';
    navEffect();
    $("#exampleModal").modal("show");
    projectModal();
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

function projectModal() {
    const cards = {
        portfolio: {
            title: "Portfolio",
            body: "Portafolio desarrollado con ASP.NET Core para destacar mi experiencia y habilidades como desarrollador web",
            github: "https://github.com/Javier-vic/Portfolio",
            live: "no"
        },
        card2: {
            title: "Título 2",
            body: "Contenido 2"
        },
    };

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function () {
        $("#projectModal").modal("hide");
    })

    const cardButtons = document.querySelectorAll(".project-modal");
    cardButtons.forEach(button => {
        button.addEventListener("click", function () {
            const cardId = button.getAttribute("data-card-id");
            const modalTitle = document.getElementById("modalTitle");
            const modalBody = document.getElementById("modalBody");
            const githubLink = document.getElementById("modalGithub");
            const liveLink = document.getElementById("modalLive");
            modalTitle.textContent = cards[cardId].title;
            modalBody.textContent = cards[cardId].body;
            if (cards[cardId].github != "no") {               
                githubLink.classList.remove("d-none");
                githubLink.href = cards[cardId].github;
            } else {
                githubLink.classList.add("d-none");
            }

            if (cards[cardId].live != "no") {                
                liveLink.classList.remove("d-none");
                liveLink.href = cards[cardId].github;
            } else {
                liveLink.classList.add("d-none");
            }

            $("#projectModal").modal("show");
        });
    });
}