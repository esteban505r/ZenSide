/*==========================================
        BASE DE DATOS DE POSTURAS
==========================================*/

const posturas = [

    {
        id:1,

        nombre:"Saludo al Sol",

        categoria:"Flexibilidad",

        tiempo:"1 - 3 minutos",

        video:"videos/arbol.mp4",

        descripcion:
        "Una postura que estira todo el cuerpo y ayuda a despertar con energía, mejorando la flexibilidad y la coordinación.",

        recomendaciones:[

            "Mantén la espalda recta.",

            "Respira profundo al subir y bajar los brazos.",

            "Haz los movimientos lentamente."

        ]

    },

    {

        id:2,

        nombre:"Postura del Gato",

        categoria:"Flexibilidad",

        tiempo:"30 Segundos - 1 Minuto",

        video:"videos/gato.mp4",

        descripcion:
        "Consiste en arquear y redondear la espalda suavemente, ayudando a relajar la columna y mejorar la movilidad.",

        recomendaciones:[

            "Apoya bien manos y rodillas.",

            "No fuerces la espalda.",

            "Coordina el movimiento con la respiración."

        ]

    },

    {

        id:3,

        nombre:"Postura del Perro",

        categoria:"Fuerza",

        tiempo:"30 - 45 Segundos",

        video:"videos/perro.mp4",

        descripcion:
        "Estira brazos, piernas y espalda, fortaleciendo el cuerpo mientras mejora el equilibrio.",

        recomendaciones:[

            "Mantén manos firmes en el suelo.",

            "Estira piernas sin bloquear rodillas.",

            "Mira hacia abajo para cuidar el cuello."

        ]

    },

    {

        id:4,

        nombre:"Respiración Relajante",

        categoria:"Calma",

        tiempo:"2 - 5 Minutos",

        video:"videos/perro.mp4",

        descripcion:
        "Una postura enfocada en respirar profundamente para calmar la mente y reducir el estrés.",

        recomendaciones:[

           "Respira por la nariz lentamente.",

            "Mantén hombros relajados.",

            "Busca un lugar tranquilo."

        ]

    },

    {

        id:5,

        nombre:"Rana Saltarina",

        categoria:"Fuerza",

        tiempo:"30 Segundos - 1 Minuto",

        video:"videos/perro.mp4",

        descripcion:
        "Ayuda a fortalecer piernas y caderas, además de mejorar la agilidad y coordinación.",

        recomendaciones:[

            "Separa bien los pies para mayor estabilidad.",

            "Flexiona rodillas con cuidado.",

            "Evita saltos bruscos."

        ]

    },

    {

        id:6,

        nombre:"Cobra Valiente",

        categoria:"Flexibilidad",

        tiempo:"20 - 40 Segundos",

        video:"videos/perro.mp4",

        descripcion:
        "Se eleva el pecho mientras el abdomen permanece en el suelo, fortaleciendo la espalda y abriendo el pecho.",

        recomendaciones:[

            "No subas más de lo que sea cómodo.",

            "Mantén hombros alejados de las orejas.",

            "Usa la fuerza de la espalda, no solo de los brazos.."

        ]

    },

    {

        id:7,

        nombre:"Mariposa Feliz",

        categoria:"Calma",

        tiempo:"1 - 2 Minutos",

        video:"videos/perro.mp4",

        descripcion:
        "Sentados con las plantas de los pies juntas, se mueven las piernas como alas para relajar caderas y piernas.",

        recomendaciones:[

            "Junta las plantas de los pies.",

            "Estira piernas sin bloquear rodillasMantén la espalda recta.",

            "Mueve las piernas suavemente."

        ]

    },

    {

        id:8,

        nombre:"Árbol Fuerte",

        categoria:"Equilibrio",

        tiempo:"30 Segundos",

        video:"videos/perro.mp4",

        descripcion:
        "Mejora el equilibrio y la concentración al mantenerse firme sobre una sola pierna.",

        recomendaciones:[

            "Fija la mirada en un punto.",

            "Activa el abdomen para equilibrarte.",

            "Si pierdes equilibrio, vuelve a intentarlo con calma."

        ]

    },

    {

        id:9,

        nombre:"Postura de estrella",

        categoria:"Fuerza",

        tiempo:"30 Segundos - 1 Minuto",

        video:"videos/perro.mp4",

        descripcion:
        "Brazos y piernas se extienden formando una estrella, ayudando a trabajar coordinación y estabilidad.",

        recomendaciones:[

            "Extiende brazos y piernas por completo.",

            "Mantén el cuerpo firme.",

            "Respira con tranquilidad."

        ]

    },

    {

        id:10,

        nombre:"Postura del niño",

        categoria:"Calma",

        tiempo:"1 - 3 Minutos",

        video:"videos/perro.mp4",

        descripcion:
        "Una postura de descanso que relaja la espalda, hombros y cuello, generando calma.",

        recomendaciones:[

            "Relaja todo el cuerpo.",

            "Descansa la frente suavemente.",

            "Respira lento y profundo."

        ]

    },

    {

        id:11,

        nombre:"Postura de la vaca",

        categoria:"Flexibilidad",

        tiempo:"30 Segundos - 1 Minuto",

        video:"videos/perro.mp4",

        descripcion:
        "Se arquea suavemente la espalda mientras se eleva el pecho, ayudando a flexibilizar la columna.",

        recomendaciones:[

            "Eleva el pecho suavemente.",

            "No fuerces el cuello.",

            "Haz el movimiento de forma controlada."

        ]

    },

    {

        id:12,

        nombre:"Postura del Guardian",

        categoria:"Fuerza",

        tiempo:"30 - 45 Segundos",

        video:"videos/perro.mp4",

        descripcion:
        "Una postura firme y estable que fortalece piernas, mejora la postura y desarrolla concentración.",

        recomendaciones:[

            "Mantén pies firmes en el suelo.",

            "Conserva la espalda recta.",

            "Concéntrate en tu respiración."

        ]

    }

];


/*==========================================
        OBTENER ID
==========================================*/

const parametros =
new URLSearchParams(window.location.search);

const id =
parseInt(parametros.get("id")) || 1;


/*==========================================
        BUSCAR POSTURA
==========================================*/

const postura =
posturas.find(p => p.id === id);


/*==========================================
        ELEMENTOS HTML
==========================================*/

const postureName =
document.getElementById("postureName");

const postureTime =
document.getElementById("postureTime");

const postureCategory =
document.getElementById("postureCategory");

const postureDescription =
document.getElementById("postureDescription");

const postureVideo =
document.getElementById("postureVideo");

const videoSource =
document.getElementById("videoSource");

const tipsList =
document.getElementById("tipsList");

const nextBtn =
document.getElementById("nextPostureBtn");


/*==========================================
        CARGAR INFORMACIÓN
==========================================*/

function cargarPostura(){

    if(!postura){

        postureName.textContent =
        "Postura no encontrada";

        return;

    }

    postureName.textContent =
    postura.nombre;

    postureTime.textContent =
    postura.tiempo;

    postureCategory.textContent =
    postura.categoria;

    postureDescription.textContent =
    postura.descripcion;

    videoSource.src =
    postura.video;

    postureVideo.load();


    tipsList.innerHTML = "";

    postura.recomendaciones.forEach(item=>{

        tipsList.innerHTML += `

            <li>${item}</li>

        `;

    });

}

cargarPostura();


/*==========================================
        SIGUIENTE POSTURA
==========================================*/

nextBtn.addEventListener("click",()=>{

    let siguiente = id + 1;

    if(siguiente > posturas.length){

        siguiente = 1;

    }

    window.location.href =
    `detalle-postura.html?id=${siguiente}`;

});