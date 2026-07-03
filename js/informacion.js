/* MENU HAMBURGUESA*/

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/*CARRUSEL MATERIAL RECOMENDADO*/



const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (track && nextBtn && prevBtn) {

    const cards = document.querySelectorAll(".recommend-card");

    let currentIndex = 0;

    function getCardsVisible() {

        if (window.innerWidth <= 768) return 1;

        if (window.innerWidth <= 1200) return 2;

        return 3;

    }

    function getCardWidth() {

        const card = cards[0];

        return card.offsetWidth + 20;

    }

    function updateCarousel() {

        const width = getCardWidth();

        track.scrollTo({
            left: currentIndex * width,
            behavior: "smooth"
        });

    }

    nextBtn.addEventListener("click", () => {

        const cardsVisible = getCardsVisible();

        if (currentIndex < cards.length - cardsVisible) {

            currentIndex++;

        } else {

            currentIndex = 0;

        }

        updateCarousel();

    });

    prevBtn.addEventListener("click", () => {

        const cardsVisible = getCardsVisible();

        if (currentIndex > 0) {

            currentIndex--;

        } else {

            currentIndex = cards.length - cardsVisible;

        }

        updateCarousel();

    });

    window.addEventListener("resize", updateCarousel);

}

/*ANIMACIÓN AL HACER SCROLL*/

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll(

    ".resource-card, .info-card, .recommend-card"

).forEach(card => {

    observer.observe(card);

});

/*SCROLL SUAVE BOTONES*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});