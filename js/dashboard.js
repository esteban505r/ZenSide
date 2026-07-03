/* ==========================================
   VERIFICAR SESIÓN ACTIVA
========================================== */

const currentUser =
JSON.parse(localStorage.getItem("zenside_session"));

if (!currentUser) {

    window.location.href = "login.html";

}

/* ==========================================
   MOSTRAR NOMBRE DEL USUARIO
========================================== */

const teacherName =
document.getElementById("teacherName");

const heroTeacherName =
document.getElementById("heroTeacherName");

if (currentUser) {

    if (teacherName) {

        teacherName.textContent =
        currentUser.name;

    }

    if (heroTeacherName) {

        heroTeacherName.textContent =
        currentUser.name;

    }

}

/* ==========================================
   FECHA ACTUAL
========================================== */

const today = new Date();

const options = {

    weekday: "long",
    day: "numeric",
    month: "long"

};

const currentDate =
today.toLocaleDateString("es-ES", options);

console.log("Fecha actual:", currentDate);

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

/* ==========================================
   TARJETAS INTERACTIVAS
========================================== */

const cards =
document.querySelectorAll(".routine-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-5px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});

/* ==========================================
   BOTONES DE RUTINAS
========================================== */

const routineButtons =
document.querySelectorAll(".routine-card button");

routineButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Esta funcionalidad estará disponible próximamente."
        );

    });

});

/* ==========================================
   BOTÓN VER REPORTES
========================================== */

const reportButton =
document.querySelector(".white-btn");

if (reportButton) {

    reportButton.addEventListener("click", () => {

        alert(
            "Aquí podrás visualizar reportes y estadísticas."
        );

    });

}

/* ==========================================
   BOTÓN GESTIONAR ESTUDIANTES
========================================== */

const studentsButton =
document.querySelector(".transparent-btn");

if (studentsButton) {

    studentsButton.addEventListener("click", () => {

        alert(
            "Aquí podrás administrar estudiantes."
        );

    });

}

/* ==========================================
   MENSAJE DE BIENVENIDA
========================================== */

window.addEventListener("load", () => {

    if (currentUser) {

        console.log(

            `Bienvenido ${currentUser.name}`

        );

    }

});

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
