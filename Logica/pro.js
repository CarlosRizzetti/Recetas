import { Receta } from "../Logica/recetas.js";
/* const btnCategorias = document.querySelectorAll("button");
btnCategorias.forEach(btn => {
  btn.addEventListener("click", () => irARecetas(btn.textContent));
}); */

const receta = new Receta();
receta.render();