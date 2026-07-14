/* ===========================================
   I DISEGNI A CHINA
   Michele Lorandi
=========================================== */

// Animazione delle opere

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".opera").forEach((opera) => {

    observer.observe(opera);

});

// Header durante lo scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});// pronto per espansione
/* ===========================
   ANIMAZIONI
=========================== */

.opera{

    opacity:0;
    transform:translateY(40px);

}

.opera.show{

    opacity:1;
    transform:translateY(0);

}

.opera{

    transition:
        opacity .8s ease,
        transform .8s ease,
        box-shadow .35s;

}

/* Header */

header{

    transition:.35s;

}

header.scroll{

    box-shadow:0 8px 24px rgba(0,0,0,.10);

}
