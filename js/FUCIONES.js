import { recetas } from "../JSON/CUADRADITOS.js";
import { contenedorMain, hojaImpresionContainer } from "../JSON/constantes.js";


export function mostrarRecetaDeMasa(cantidad, MasaSeleccionada) {
    cantidad.addEventListener("input", (e) => {
        e.preventDefault();        
        hojaImpresionContainer.innerHTML = `
        <section class="descripcion-producto-item">
           <h3>Cantidad de masa </h3><h3 id="cantidad-producto-item">${e.target.value} Kilos</h3>
        </section>`;
            MasaSeleccionada.forEach(ingrediente => {
            const cantidad = e.target.value;
            let ing = ingrediente.cantidad;
            let total = Number(ing) * Number(cantidad);
            hojaImpresionContainer.innerHTML += `
                    <section class="receta-item">
                        <label>${ingrediente.nombre}</label> 
                        <p>${total.toFixed(2)}</p>
                    </section>` ;
        });
    });
}
