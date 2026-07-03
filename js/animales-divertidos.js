const rutina = {

    nombre:"Despertar Mañanero",

    descripcion:
    "Estas posturas requieren sostener el peso corporal, fortalecer piernas, brazos, espalda y abdomen, además de mejorar la estabilidad.",

    posturas:[

        {
            nombre:"Rana Saltarina",
            imagen:"images/sapo.png",
            
        },

        {
            nombre:"Cobra Valiente",
            imagen:"images/lobo.png",
            
        },

        {
            nombre:"Mariposa Feliz",
            imagen:"images/Raton.png"
        },

        {
            nombre:"Arbol Fuerte",
            imagen:"images/oso_perezoso.png"
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