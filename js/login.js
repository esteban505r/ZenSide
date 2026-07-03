/*====================================
    LOGIN.JS
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) return;

    loginForm.addEventListener(
        "submit",
        loginUser
    );

});

/*------------------------------------
INICIAR SESIÓN
------------------------------------*/

function loginUser(e) {

    e.preventDefault();

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim()
            .toLowerCase();

    const password =
        document
            .getElementById("loginPassword")
            .value;

    /* VALIDAR EMAIL */

    if (!validateEmail(email)) {

        showMessage(
            "loginMessage",
            "Ingresa un correo válido.",
            "error"
        );

        return;
    }

    /* BUSCAR USUARIOS */

    const users =
        JSON.parse(
            localStorage.getItem("zenside_users")
        ) || [];

    const user =
        users.find(
            u =>
                u.email === email &&
                u.password === password
        );

    /* VALIDAR */

    if (!user) {

        showMessage(
            "loginMessage",
            "Correo o contraseña incorrectos.",
            "error"
        );

        return;
    }

    /* GUARDAR SESIÓN */

    saveSession({

        id: user.id,

        name: user.name,

        email: user.email

    });

    showMessage(
        "loginMessage",
        "Inicio de sesión exitoso.",
        "success"
    );

    /* REDIRECCIÓN */

    console.log("usuario encontrtado", user)

    setTimeout(() => {

        window.location.href =
            "dashboard.html";

    }, 1500);

}