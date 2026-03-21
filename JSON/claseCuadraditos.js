import { recetas } from "./CUADRADITOS.js";
import { contenedorMain, hojaImpresionContainer } from "../JSON/constantes.js";

export class CuadraditosClase {
    renderCuadraditos() {
        // 1. Renderizado inicial limpio
        contenedorMain.innerHTML = `
            <section id="recetas-lista">
                ${recetas.map(receta => `
                    <section class="receta-cuadradito-item">
                        <div class="btn-receta-item">${receta.Mercaderia}</div>
                        <input type="number" data-id="${receta.Mercaderia}" placeholder="Cantidad">
                    </section>`).join('')}
            </section>`;
        
        contenedorMain.appendChild(hojaImpresionContainer);
        hojaImpresionContainer.innerHTML = '';

        // 2. Delegación de eventos (más eficiente que querySelectorAll)
        contenedorMain.addEventListener("change", (e) => {
            if (e.target.tagName === 'INPUT') {
                this.actualizarHojaImpresion();
            }
        });
    }

    // 3. Método para recalcular toda la hoja
    actualizarHojaImpresion() {
        hojaImpresionContainer.innerHTML = '';
        const inputs = contenedorMain.querySelectorAll("input[type='number']");

        inputs.forEach(input => {
            const cantidad = parseFloat(input.value);
            if (!cantidad || cantidad <= 0) return;

            const receta = recetas.find(r => r.Mercaderia === input.dataset.id);
            if (!receta) return;

            // Renderizado modular de secciones
            hojaImpresionContainer.innerHTML += this.crearSeccionIngredientes(`Relleno de ${receta.Mercaderia}`, receta.Ingredientes, cantidad*receta.Unidades);
            
            if (receta.Crumble) 
                hojaImpresionContainer.innerHTML += this.crearSeccionIngredientes(`Crumble de ${receta.Mercaderia}`, receta.Crumble, cantidad*receta.Unidades);
            
            if (receta.Pastelera) 
                hojaImpresionContainer.innerHTML += this.crearSeccionIngredientes(`Pastelera de ${receta.Mercaderia}`, receta.Pastelera, cantidad*receta.Unidades);
            
            if (receta.Procedimiento) 
                hojaImpresionContainer.innerHTML += this.crearSeccionProcedimiento(receta.Mercaderia, receta.Procedimiento);
            
        });
    }

    // 4. Helper: Generador de tablas de ingredientes (DRY - Don't Repeat Yourself)
    crearSeccionIngredientes(titulo, lista, cantidad) {
        const filas = lista.map(ing => {
           
            const total = Number(ing.bruto) * (cantidad)
            return `
                <section class="receta-item">
                    <label>${ing.nombre}</label> 
                    <p>${total.toFixed(2)}</p>
                    <p>${(total - (total * ing.limpio)).toFixed(2)}</p>
                    <p>${(total * ing.cocido).toFixed(2)}</p>
                </section>`;
        }).join('');

        return `
            <section class="descripcion-producto-item">
                <h3>${titulo}</h3><h3></h3><h2>Bruto</h2><h2>Limpio</h2><h2>Cocido</h2>
            </section>
            ${filas}`;
    }

    // 5. Helper: Generador de procedimiento
    crearSeccionProcedimiento(nombre, pasos) {
        const listaPasos = pasos.map(p => `<section class="procedimiento-item"><h4>${p.nombre}</h4></section>`).join('');
        return `
            <section class="descripcion-producto-item">
                <h3 class="titulo-procedimiento">Procedimiento de ${nombre}</h3>
            </section>
            ${listaPasos}`;
    }
}