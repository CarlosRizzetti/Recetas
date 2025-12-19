import './DATOS_PASTELERIA.JS';
import './FUNCIONES.JS';
import './ALIAS.js';
import './DATOS_LISTADOS.JS';


const categorias = document.getElementById("categorias");
categorias.addEventListener("change", function() {
    const seleccion = categorias.value;
    console.log("Categoría seleccionada:", seleccion);
    // Aquí puedes agregar la lógica para filtrar las recetas según la categoría seleccionada
});