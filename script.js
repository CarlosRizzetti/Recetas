import './DATOS_PASTELERIA.JS';
import './FUNCIONES.JS';
import './ALIAS.js';
import './DATOS_LISTADOS.JS';
import { recetas } from './DATOS_PASTELERIA.JS';
const containerRecetas = document.getElementById("recetasContainer");
document.addEventListener("DOMContentLoaded", () => {
    containerRecetas.innerHTML = "";    
})

const categorias = document.getElementById("categorias");
categorias.addEventListener("change", function() {
    const seleccion = categorias.value;
    console.log("Categoría seleccionada:", seleccion);
    if (seleccion === "Pasteleria") {
        recetas.forEach(receta => { 
            containerRecetas.innerHTML += `<option>${receta.mercaderia}</option>`;
            console.log("Receta:", receta.mercaderia);
            mostrarRecetas(receta.ingredientes);
        });
    }
    // Aquí puedes agregar la lógica para filtrar las recetas según la categoría seleccionada
});
function mostrarRecetas(nombre) {
    nombre.forEach(receta => {
        console.log("Receta:", receta.cantidad, receta.unidad, receta.nombre);
    });
}
