import './DATOS_PASTELERIA.JS';
import './FUNCIONES.JS';
import './ALIAS.js';
import './DATOS_LISTADOS.JS';
import { recetas } from './DATOS_PASTELERIA.JS';
const containerRecetas = document.getElementById("recetasContainer");
const tablaResultado = document.getElementById("tablaResultado");
const cantidadReceta = document.getElementById("cantidadReceta");
const calcularBtn = document.getElementById("calcular");
const cuadradito=document.getElementById("cuadradito");
const receta=[]
let seleccionDeCategoria="";
let seleccion="";
document.addEventListener("DOMContentLoaded", () => {
    containerRecetas.innerHTML = "";    
})

const categorias = document.getElementById("categorias");
categorias.addEventListener("change", function() {
     seleccionDeCategoria = categorias.value;
    console.log("Categoría seleccionada:", seleccionDeCategoria);
    if (seleccionDeCategoria === "Pasteleria") {
        recetas.forEach(receta => { 
            containerRecetas.innerHTML += `<option>${receta.mercaderia}</option>`;
             
        });
    }
    
});
containerRecetas.addEventListener("change", function() {
     seleccion = containerRecetas.value;
    console.log("Receta seleccionada:", seleccion);
});
calcularBtn.addEventListener("click", ()=> {
    recetas.forEach(receta => {
        mostrarRecetas(seleccion);
});
})
function mostrarRecetas(nombre) {
    cuadradito.textContent=`RECETA DE ${nombre}:`;
    const recetaBuscada = recetas.filter(r => r.mercaderia.includes(nombre));   
    if (recetaBuscada) {
        tablaResultado.innerHTML = "";  
        recetaBuscada.forEach(receta => {
            receta.ingredientes.forEach(ingrediente => {
                tablaResultado.innerHTML += `
                <tr><td class="nombre-ingrediente">${ingrediente.nombre}</td>
                <td class="cantidad-ingrediente">${Number(ingrediente.cantidad)*Number(cantidadReceta.value*63)}</td></tr>`;
            });
        });
    }
}
