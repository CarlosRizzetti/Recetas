import { hojaImpresionContainer, inputCantidadMasa, header, contenedorMain } from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";
import { MasaDeChocolate } from "../Logica/MASA_DE_CHOCOLATE.js";
import { recetas } from "../Logica/CUADRADITOS.js";
import { mostrarRecetaDeMasa } from "./FUNCIONES.js";
import { CuadraditosClase } from "./claseCuadraditos.js";

 let cantidadCuadraditos;
document.addEventListener("DOMContentLoaded", () => {    
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");   
    header.innerHTML = `<section id="titulo-receta">Receta de ${sector}</section    > 
    <button onclick="window.print()" id="btnImprimir">Imprimir</button> `;

     if (sector === "Masa") {
        Masa.forEach(ingrediente => {
            hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${ingrediente.cantidad}</p>
                </section>
                `;
        });
        mostrarRecetaDeMasa(inputCantidadMasa);
    }
    if (sector === "Masa de chocolate") {
        MasaDeChocolate.forEach(ingrediente => {
            hojaImpresionContainer.innerHTML += `
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${ingrediente.cantidad}</p>
                </section>
                `;
        });
        mostrarRecetaDeMasa(inputCantidadMasa);
    }
  

    if (sector === "Cuadraditos") {
        const cuadrditos= new CuadraditosClase();
        cuadrditos.renderCuadraditos();
    }
});



