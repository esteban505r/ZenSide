/*PROTEGER PÁGINA*/

const currentUser =
    JSON.parse(
        localStorage.getItem("zenside_session")
    );

if (!currentUser) {

    window.location.href = "login.html";

}

/* ==========================================
   MOSTRAR NOMBRE DEL USUARIO
========================================== */

const teacherName =
    document.getElementById("teacherName");

if (teacherName && currentUser) {

    teacherName.textContent =
        currentUser.name;

}


/* ==========================================
   BOTÓN JUGAR AHORA
========================================== */

const playMainBtn =
    document.querySelector(".play-btn");

if (playMainBtn) {

    playMainBtn.addEventListener("click", () => {

        alert(
            "Iniciando rutina: Saludo al Sol ☀️"
        );

    });

}


/* ==========================================
   FILTROS
========================================== */

const filters = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".routine-card");

filters.forEach(button => {
    button.addEventListener("click", () => {

        // Cambiar botón activo
        filters.forEach(btn => btn.classList.remove("active-filter"));
        button.classList.add("active-filter");

        const filter = button.dataset.filter;

        cards.forEach(card => {
            const category = card.dataset.category;

            console.log("Filtro:", filter);
            console.log("Categoria:", category);

            if (filter === "todas" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/* ==========================================
   ANIMACIÓN AL CARGAR
========================================== */

window.addEventListener("load", () => {

    const cards =
        document.querySelectorAll(
            ".routine-card"
        );

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        setTimeout(() => {

            card.style.transition =
                ".6s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, index * 150);

    });

});

/* ==========================================
   MENSAJE BIENVENIDA
========================================== */

window.addEventListener("load", () => {

    console.log(

        `Bienvenido ${currentUser.name} a Rutinas ZenSide`

    );

});

/* ==========================================
   BOTÓN CERRAR SESIÓN
========================================== */

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout =
            confirm("¿Deseas cerrar sesión?");

        if (confirmLogout) {

            localStorage.removeItem(
                "zenside_session"
            );

            window.location.href =
                "index.html";

        }

    });

}

/*abre/cierra correcto*/

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("sidebarOverlay");

function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
}

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

function toggleSidebar() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

menuToggle.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);

/*cerrar al cmabiar a des*/

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        closeSidebar();
    }
});