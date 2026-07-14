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
