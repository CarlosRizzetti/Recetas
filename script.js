import './DATOS_PASTELERIA.JS';
import './FUNCIONES.JS';
import './ALIAS.js';
import './DATOS_LISTADOS.JS';
import { recetas } from './DATOS_PASTELERIA.JS';


const categorias = document.getElementById("categorias");
categorias.addEventListener("change", function() {
    const seleccion = categorias.value;
    console.log("Categoría seleccionada:", seleccion);
    if (seleccion === "Pasteleria") {
        recetas.forEach(receta => { 
            console.log("Receta:", receta);
        });
    }
    // Aquí puedes agregar la lógica para filtrar las recetas según la categoría seleccionada
});
document.getElementById("excelFile").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    // Primera hoja
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convertir a JSON
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    console.log(jsonData);
  };

  reader.readAsArrayBuffer(file);
});