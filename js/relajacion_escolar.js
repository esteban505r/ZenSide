const rutina = {

    nombre:"Despertar Mañanero",

    descripcion:
    "Las posturas del gato, perro y saludo al sol favorecen el estiramiento muscular, la movilidad articular y la elasticidad corporal.",

    posturas:[

        {
            nombre:"Respiracion Relajante",
            imagen:"images/conejo.png",
            
        },

        {
            nombre:"Postura de Estrella",
            imagen:"images/oveja.png",
            
        },

        {
            nombre:"Postura del Niño",
            imagen:"images/oso.png"
        }

    ]
};

let actual = 0;

const mainImage =
document.getElementById("mainImage");

const mainDescription =
document.getElementById("mainDescription");

const postureList =
document.getElementById("postureList");

function renderizar(){

    mainImage.src =
    rutina.posturas[actual].imagen;

    mainDescription.textContent =
    rutina.descripcion;

    postureList.innerHTML = "";

    rutina.posturas.forEach((postura,index)=>{

        if(index !== actual){

            postureList.innerHTML += `

            <div class="posture-card"
            onclick="cambiarPostura(${index})">

                <img src="${postura.imagen}">

                <div>

                    <h4>${postura.nombre}</h4>

                </div>

            </div>
            `;
        }
    });
}

function cambiarPostura(index){

    actual = index;

    renderizar();
}

function volverRutinas(){

    window.location.href =
    "rutinas.html";
}

renderizar();