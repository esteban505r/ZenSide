/* ======================================
   MENU MOBILE
====================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ======================================
   BUSCADOR + FILTROS
====================================== */

const searchInput = document.getElementById("searchInput");
const postureCards = document.querySelectorAll(".posture-card");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");

let currentFilter = "all";

function filterPostures() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    let visibleCards = 0;

    postureCards.forEach(card => {

        const category =
            card.dataset.category;

        const title =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

        const matchesSearch =
            title.includes(searchText);

        const matchesFilter =
            currentFilter === "all" ||
            category === currentFilter;

        if(matchesSearch && matchesFilter){

            card.style.display = "block";
            visibleCards++;

        }else{

            card.style.display = "none";

        }

    });

    if(visibleCards === 0){

        noResults.style.display = "block";

    }else{

        noResults.style.display = "none";

    }

}

/* BUSCADOR */

searchInput.addEventListener("input", () => {

    filterPostures();

});

/* FILTROS */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentFilter =
            button.dataset.filter;

        filterPostures();

    });

});

/* CARGA INICIAL */

filterPostures();

/* ======================================
   BOTONES PLAY
====================================== */

/*==========================================
        ABRIR DETALLE DE POSTURA
==========================================*/

const playButtons =
document.querySelectorAll(".play-btn");

playButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const card =
        button.closest(".posture-card");

        const id =
        card.dataset.id;

        window.location.href =
        `detalle-postura.html?id=${id}`;

    });

});

/* ======================================
   ANIMACIÓN SCROLL
====================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: .15
    }

);

postureCards.forEach(card => {

    observer.observe(card);

});

/* ======================================
   SCROLL SUAVE
====================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

