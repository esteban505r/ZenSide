/*=========================================
    CUENTACUENTOS.JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        VALIDAR SESIÓN
    =========================================*/

    const currentUser =
        JSON.parse(
            localStorage.getItem("zenside_session")
        );

    if (!currentUser) {

        window.location.href = "login.html";
        return;

    }

    /*=========================================
        MOSTRAR NOMBRE USUARIO
    =========================================*/

    const teacherName =
        document.getElementById("teacherName");

    if (teacherName) {

        teacherName.textContent =
            currentUser.name;

    }

    


    /*=========================================
        CERRAR AL DAR CLICK EN MENÚ
    =========================================*/

    const menuLinks =
        document.querySelectorAll(
            ".sidebar-menu a"
        );

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (
                window.innerWidth <= 768
            ) {

                sidebar.classList.remove(
                    "active"
                );

                overlay.classList.remove(
                    "active"
                );

                const icon =
                    menuToggle.querySelector("i");

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        });

    });

    /*=========================================
        EFECTO HOVER TARJETAS
    =========================================*/

    const cards =
        document.querySelectorAll(
            ".story-card"
        );

    cards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.transform =
                    "translateY(-6px)";

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0px)";

            }
        );

    });

    /*=========================================
        BOTONES REPRODUCIR
    =========================================*/

    const playButtons =
        document.querySelectorAll(
            ".play-btn"
        );

    playButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                alert(
                    "Próximamente podrás reproducir este cuento."
                );

            }
        );

    });

});

/*=========================================
    CERRAR SESIÓN
=========================================*/

function logout() {

    const confirmLogout =
        confirm(
            "¿Deseas cerrar sesión?"
        );

    if (confirmLogout) {

        localStorage.removeItem(
            "zenside_session"
        );

        window.location.href =
            "login.html";

    }

}

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