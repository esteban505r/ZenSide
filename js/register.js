/*====================================
    REGISTER.JS
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    const registerForm =
        document.getElementById("registerForm");

    if (!registerForm) return;

    registerForm.addEventListener(
        "submit",
        registerUser
    );

});

/*------------------------------------
REGISTRAR USUARIO
------------------------------------*/

function registerUser(e) {

    e.preventDefault();

    const name =
        document
            .getElementById("registerName")
            .value
            .trim();

    const email =
        document
            .getElementById("registerEmail")
            .value
            .trim()
            .toLowerCase();

    const password =
        document
            .getElementById("registerPassword")
            .value;

    const confirmPassword =
        document
            .getElementById("confirmPassword")
            .value;

    /* VALIDAR NOMBRE */

    if (name.length < 3) {

        showMessage(
            "registerMessage",
            "El nombre debe tener al menos 3 caracteres.",
            "error"
        );

        return;
    }

    /* VALIDAR EMAIL */

    if (!validateEmail(email)) {

        showMessage(
            "registerMessage",
            "Ingresa un correo electrónico válido.",
            "error"
        );

        return;
    }

    /* VALIDAR PASSWORD */

    if (!validatePassword(password)) {

        showMessage(
            "registerMessage",
            "La contraseña debe tener mínimo 6 caracteres.",
            "error"
        );

        return;
    }

    /* CONFIRMAR PASSWORD */

    if (password !== confirmPassword) {

        showMessage(
            "registerMessage",
            "Las contraseñas no coinciden.",
            "error"
        );

        return;
    }

    /* OBTENER USUARIOS */

    const users =
        JSON.parse(
            localStorage.getItem("zenside_users")
        ) || [];

    /* VALIDAR DUPLICADOS */

    const userExists =
        users.find(
            user => user.email === email
        );

    if (userExists) {

        showMessage(
            "registerMessage",
            "Ya existe una cuenta con este correo.",
            "error"
        );

        return;
    }

    /* CREAR USUARIO */

    const newUser = {

        id: Date.now(),

        name: name,

        email: email,

        password: password,

        createdAt:
            new Date().toISOString()

    };

    /* GUARDAR */

    users.push(newUser);

    localStorage.setItem(
        "zenside_users",
        JSON.stringify(users)
    );

    /* MENSAJE */

    showMessage(
        "registerMessage",
        "Cuenta creada correctamente. Redirigiendo...",
        "success"
    );

    /* LIMPIAR FORM */

    document
        .getElementById("registerForm")
        .reset();

    /* REDIRECCIÓN */

    setTimeout(() => {

        window.location.href =
            "login.html";

    }, 2000);

}