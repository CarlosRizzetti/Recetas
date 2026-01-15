import { recetas } from "../Logica/CUADRADITOS.js";
import { contenedorMain, hojaImpresionContainer} from "../Logica/CONST.js";
import { Masa } from "../Logica/MASA.js";

export function mostrarRecetaDeMasa(cantidad) {
    cantidad.addEventListener("input", (e) => {
        e.preventDefault();
         console.log(e.target.value);
        hojaImpresionContainer.innerHTML = `<section class="descripcion-producto-item">
                                  <label>Cantidad de masa </label><p> ${e.target.value} Kilos</p>
                                </section>`;
        Masa.forEach(ingrediente => {
            const cantidad = e.target.value;
            let ing = ingrediente.cantidad;
            let total = Number(ing) * Number(cantidad);           
            hojaImpresionContainer.innerHTML += `
                    <section class="receta-item">
                        <label>${ingrediente.nombre}</label> 
                        <p>${total.toFixed(2)}</p>
                    </section>                
                    `;
        });
    });
}
export function CuadraditosSeleccionado(inputCuadraditos) {    
    inputCuadraditos.forEach(inputCuadraditos => {        
        inputCuadraditos.addEventListener("input", (e) => {
            e.preventDefault();
            const cantidad = e.target.value;            
            hojaImpresionContainer.innerHTML = `
             <section class="descripcion-receta-item">
                <h3> ${e.target.value}</h3>
             </section>   `;
            const recetaElegida = recetas.find(receta => receta.mercaderia === e.target.id);
            recetaElegida.ingredientes.forEach(ingrediente => {
                let ing = ingrediente.cantidad;
                let total = Number(ing) * Number(cantidad);
                hojaImpresionContainer.innerHTML += `                          
                <section class="receta-item">
                    <label>${ingrediente.nombre}</label> 
                    <p>${total.toFixed(2)}</p>
                </section>                
                `;
            });        
    });
    
});
localStoreageGuardar(hojaImpresionContainer);
}
export function localStoreageGuardar(hojaImpresionContainer) {
    const historial= JSON.parse(localStorage.getItem("historial")) || [];
    historial.push(hojaImpresionContainer.innerHTML);
    localStorage.setItem("historial", JSON.stringify(historial));
}




















