import { header } from "../Json/CONST.js";

const contenedorMain = document.getElementById('contenedor-main');
const botonesCategoria = document.querySelectorAll('#Pasteleria, #Pastas, #Flanes');

const recetas = {
    Pasteleria: [
        { nombre: "Cuadraditos", sector: "Cuadraditos" },
        { nombre: "Budines", sector: "Budines" },
        { nombre: "Masa", sector: "Masa" },
        { nombre: "Masa de chocolate", sector: "Masa de chocolate" }
    ],
    Pastas: [
        { nombre: "Rellenos para pastas", sector: "Rellenos para pastas" },
        { nombre: "Masa para ravioles", sector: "Masa de Ravioles" },
        { nombre: "Masa para pascualina", sector: "Masa de Pascualina" }
    ],
    Flanes: [
        { nombre: "Flanes", sector: "Flanes" },
        { nombre: "Gelatinas", sector: "Gelatinas" },
        { nombre: "Postres", sector: "Postres" }
    ]
};

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', () => {
        renderSubcategorias(boton.id);
    });
});

function renderSubcategorias(categoria) {

    const lista = recetas[categoria];

    contenedorMain.innerHTML = `
        <div class="subcategoria-container">
            ${lista.map(item => `
                <a class="sub-btn" 
                   href="hojaDeImpresion.html?sector=${encodeURIComponent(item.sector)}" 
                   target="_blank">
                   ${item.nombre}
                </a>
            `).join('')}
        </div>
    `;

    agregarBotonInicio();
}

function agregarBotonInicio() {

    if (!document.getElementById('btn-reinicio')) {
        const btnInicio = document.createElement('button');
        btnInicio.id = 'btn-reinicio';
        btnInicio.textContent = 'Inicio';
        btnInicio.onclick = () => location.reload();
        header.appendChild(btnInicio);
    }
}