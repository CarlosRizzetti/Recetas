import { contenedorMain, hojaImpresionContainer } from "../JSON/constantes.js";
export class BaseClase {
    constructor(titulo) {
        this.titulo = titulo;
    }

    // Método universal para renderizar la estructura básica
    render(datos, templateFunc) {
        if (!datos) return;

        const html = `
            <div class="receta-card">
                <h1 class="receta-titulo">${this.titulo}</h1>
                <div class="receta-contenido">
                    ${templateFunc(datos)}
                </div>
                <button class="no-print btn-print" onclick="window.print()">
                    Imprimir Receta
                </button>
            </div>
        `;
        
        hojaImpresionContainer.innerHTML = html;
    }
}