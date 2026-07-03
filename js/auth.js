/*====================================
    AUTH.JS
    Funciones globales compartidas
====================================*/

/*------------------------------------
MOSTRAR MENSAJES
------------------------------------*/

function showMessage(elementId, message, type) {

    const element = document.getElementById(elementId);

    if (!element) return;

    element.textContent = message;

    element.className = type;

    setTimeout(() => {

        element.textContent = "";
        element.className = "";

    }, 4000);

}

/*------------------------------------
VALIDAR EMAIL
------------------------------------*/

function validateEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

/*------------------------------------
VALIDAR CONTRASEÑA
mínimo 6 caracteres
------------------------------------*/

function validatePassword(password) {

    return password.length >= 6;

}

/*------------------------------------
GUARDAR SESIÓN
------------------------------------*/

function saveSession(user) {

    localStorage.setItem(
        "zenside_session",
        JSON.stringify(user)
    );

}

/*------------------------------------
OBTENER SESIÓN
------------------------------------*/

function getSession() {

    const session =
        localStorage.getItem("zenside_session");

    return session
        ? JSON.parse(session)
        : null;

}

/*------------------------------------
ELIMINAR SESIÓN
------------------------------------*/

function logout() {

    localStorage.removeItem(
        "zenside_session"
    );

    window.location.href =
        "login.html";

}

/*------------------------------------
USUARIO ACTUAL
------------------------------------*/

function getCurrentUser() {

    return getSession();

}

/*------------------------------------
VERIFICAR SI EXISTE SESIÓN
------------------------------------*/

function isLoggedIn() {

    return getSession() !== null;

}

/*------------------------------------
MOSTRAR / OCULTAR PASSWORD
------------------------------------*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const passwordInputs =
            document.querySelectorAll(
                'input[type="password"]'
            );

        passwordInputs.forEach(input => {

            const parent =
                input.parentElement;

            if (!parent) return;

            const eye =
                document.createElement("i");

            eye.classList.add(
                "fa-regular",
                "fa-eye",
                "toggle-password"
            );

            parent.appendChild(eye);

            eye.addEventListener(
                "click",
                () => {

                    if (
                        input.type === "password"
                    ) {

                        input.type = "text";

                        eye.classList.remove(
                            "fa-eye"
                        );

                        eye.classList.add(
                            "fa-eye-slash"
                        );

                    } else {

                        input.type = "password";

                        eye.classList.remove(
                            "fa-eye-slash"
                        );

                        eye.classList.add(
                            "fa-eye"
                        );

                    }

                }
            );

        });

    }
);

/*------------------------------------
PROTEGER PÁGINAS PRIVADAS
------------------------------------*/

function protectPage() {

    if (!isLoggedIn()) {

        window.location.href =
            "login.html";

    }

}

/*------------------------------------
REDIRECCIÓN AUTOMÁTICA
SI YA ESTÁ LOGUEADO
------------------------------------*/

function redirectIfLogged() {

    if (isLoggedIn()) {

        window.location.href =
            "dashboard.html";

    }

}