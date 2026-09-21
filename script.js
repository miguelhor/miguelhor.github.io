const btnAbrir = document.getElementById("btnAbrir");
const jardin = document.getElementById("jardin");
const flores = document.getElementById("flores");
const btnCarta = document.getElementById("btnCarta");
const carta = document.getElementById("carta");
const btnFinal = document.getElementById("btnFinal");
const final = document.getElementById("final");
const particulasInicio = document.getElementById("particulasInicio");
const petalosFinal = document.getElementById("petalosFinal");

let floresCreadas = false;
let finalActivado = false;

/* PARTÍCULAS DEL INICIO */
function crearParticulasInicio() {
    const cantidad = window.innerWidth < 600 ? 18 : 30;

    for (let i = 0; i < cantidad; i++) {
        const particula = document.createElement("span");
        particula.className = "particula";
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 88}%`;
        particula.style.setProperty("--s", `${2 + Math.random() * 3}px`);
        particula.style.setProperty("--d", `${4 + Math.random() * 5}s`);
        particula.style.setProperty("--delay", `${Math.random() * -8}s`);
        particulasInicio.appendChild(particula);
    }
}

/* ABRIR REGALO */
btnAbrir.addEventListener("click", () => {
    jardin.classList.add("activo");

    if (!floresCreadas) {
        crearFlores();
        floresCreadas = true;
    }

    jardin.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* CREAR JARDÍN */
function crearFlores() {
    const cantidad = window.innerWidth < 600 ? 12 : 17;

    for (let i = 0; i < cantidad; i++) {
        const flor = document.createElement("div");
        flor.className = "flor";

        const base = (i + .7) * (100 / cantidad);
        const variacion = (Math.random() - .5) * 3.2;
        const alto = 145 + Math.random() * 165;
        const escala = .65 + Math.random() * .55;
        const delay = .12 + i * .11 + Math.random() * .18;
        const hojaY = 50 + Math.random() * Math.max(40, alto - 125);
        const giro = -11 + Math.random() * 22;
        const balanceo = 3.5 + Math.random() * 2.8;

        flor.style.left = `${Math.max(3, Math.min(97, base + variacion))}%`;
        flor.style.setProperty("--alto", `${alto}px`);
        flor.style.setProperty("--escala", escala.toFixed(2));
        flor.style.setProperty("--delay", `${delay.toFixed(2)}s`);
        flor.style.setProperty("--hoja-y", `${hojaY}px`);
        flor.style.setProperty("--giro", `${giro.toFixed(1)}deg`);
        flor.style.setProperty("--balanceo", `${balanceo.toFixed(1)}s`);
        flor.style.zIndex = String(Math.round(alto));

        flor.innerHTML = `
            <div class="flor-interior">
                <div class="tallo"></div>
                <div class="hoja izquierda"></div>
                <div class="hoja derecha" style="--hoja-y: ${Math.max(36, hojaY - 38)}px"></div>
                <div class="cabeza-flor"></div>
            </div>
        `;

        flores.appendChild(flor);
    }
}

/* ABRIR CARTA */
btnCarta.addEventListener("click", () => {
    carta.classList.add("visible");
    carta.scrollIntoView({ behavior: "smooth", block: "center" });
});

/* FINAL */
btnFinal.addEventListener("click", () => {
    final.classList.add("visible");
    final.scrollIntoView({ behavior: "smooth", block: "start" });

    if (!finalActivado) {
        finalActivado = true;
        lluviaDePetalos();
    }
});

function lluviaDePetalos() {
    const cantidad = window.innerWidth < 600 ? 32 : 48;

    for (let i = 0; i < cantidad; i++) {
        const petalo = document.createElement("span");
        petalo.className = "petalo-caida";
        petalo.style.left = `${Math.random() * 100}%`;
        petalo.style.setProperty("--dur", `${4.5 + Math.random() * 4.5}s`);
        petalo.style.setProperty("--desvio", `${-80 + Math.random() * 160}px`);
        petalo.style.setProperty("--rot", `${360 + Math.random() * 720}deg`);
        petalo.style.animationDelay = `${Math.random() * 2.5}s`;
        petalo.style.transform = `scale(${.55 + Math.random() * .8})`;
        petalosFinal.appendChild(petalo);

        petalo.addEventListener("animationend", () => petalo.remove());
    }
}

crearParticulasInicio();
