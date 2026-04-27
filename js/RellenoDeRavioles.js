import { contenedorMain, hojaImpresionContainer } from "../JSON/constantes.js";
import { rellenosParaPastas } from "../JSON/RELLENO_PARA_PASTAS.js";

let cantidadRavioles;
export class RellenoDeRavioles {
    constructor() { }
    renderRellenoDeRavioles() {
        contenedorMain.innerHTML = '<section id="recetas-lista"></section>';
        const listaRecetas = document.getElementById("recetas-lista");
        rellenosParaPastas.forEach(receta => {
            listaRecetas.innerHTML += `
                            <section class="receta-cuadradito-item">
                                <div class="btn-receta-item">${receta.mercaderia}</div>
                                <input type="number" id="${receta.mercaderia}" placeholder="Cantidad ">
                            </section>
                                `;
        });
        contenedorMain.appendChild(hojaImpresionContainer);
        cantidadRavioles = document.querySelectorAll("input[type='number']");
        hojaImpresionContainer.innerHTML = '';
        cantidadRavioles.forEach(input => {
            input.addEventListener("change", (e) => {                
                e.preventDefault();
                if (e.target.value === '') {
                    hojaImpresionContainer.innerHTML = '';
                    return;
                } if (e.target.value > 0) {
                    const cantidad = e.target.value;
                    const recetaElegida = rellenosParaPastas.find(receta => receta.mercaderia === e.target.id);
                    let rehogo = recetaElegida.rehogo;
                    let verduras = recetaElegida.verduras;
                    hojaImpresionContainer.innerHTML += `  
                                                <section class="descripcion-producto-item">
                                                  <h3> ${e.target.id}</h3><h3 id="cantidad-producto-item">${cantidad} Kg</h3><h2>Bruto</h2><h2>Limpio</h2><h2>Cocido</h2>
                                                </section> `;
                    recetaElegida.ingredientes.forEach(ingrediente => {
                        let bruto = ingrediente.bruto;
                        let limpio = ingrediente.limpio;
                        let cocido = ingrediente.cocido;
                        let total = Number(bruto) * Number(cantidad);
                          if (ingrediente.nombre==="Conservante (Benzoato+Sorbato) 1g x kg relleno"|| ingrediente.nombre==="Nuez moscada" ||
                             ingrediente.nombre==="Pimienta blanca" ) {
                                total = Number(bruto) * (Number(cantidad) / 1000);
                            }
                        hojaImpresionContainer.innerHTML += `                                                                      
                                                <section class="receta-item">
                                                   <label>${ingrediente.nombre}</label> 
                                                   <p>${total.toFixed(3)} Kg</p>
                                                    <p>${(total - (total * ingrediente.limpio)).toFixed(3)} Kg</p>
                                                    <p>${(total * ingrediente.cocido).toFixed(3)} Kg</p>
                                                 </section>                
                                                   `;
                    });
                    if (rehogo) {
                        hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3 class="titulo-crumble">Rehogo </h3> <p>Bruto</p><p>Limpio</p><p>Cocido</p>
                                        </section> `;
                        rehogo.forEach(ingrediente => {
                            let bruto = ingrediente.bruto;
                            let limpio = ingrediente.limpio;
                            let cocido = ingrediente.cocido;
                            let total = Number(bruto) * Number(cantidad);
                            hojaImpresionContainer.innerHTML += `                                                                      
                                                    <section class="receta-item">
                                                       <label>${ingrediente.nombre}</label> 
                                                       <p>${total.toFixed(3)} Kg</p>
                                                        <p>${(total - (total * ingrediente.limpio)).toFixed(3)} Kg</p>
                                                        <p>${(total * ingrediente.cocido).toFixed(3 )} Kg </p>
                                                     </section>                
                                                       `;
                        });
                    }
                    if (verduras) {
                        hojaImpresionContainer.innerHTML += `  
                                        <section class="descripcion-producto-item">
                                          <h3 class="titulo-crumble">Verduras cocidas </h3> <p>Bruto</p><p>Limpio</p><p>Cocido</p>
                                        </section> `;
                        verduras.forEach(ingrediente => {
                            let bruto = ingrediente.bruto;
                            let limpio = ingrediente.limpio;
                            let cocido = ingrediente.cocido;
                            let total = Number(bruto) * Number(cantidad);
                          
                            hojaImpresionContainer.innerHTML += `                                                                      
                                                    <section class="receta-item">
                                                       <label>${ingrediente.nombre}</label> 
                                                       <p>${total.toFixed(3)}</p>
                                                        <p>${(total - (total * ingrediente.limpio)).toFixed(3)}</p>
                                                        <p>${(total * ingrediente.cocido).toFixed(3)}</p>
                                                     </section>                
                                                       `;
                        });

                    }
                }
            });
        });
    }
}