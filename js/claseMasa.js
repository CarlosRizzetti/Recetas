import { BaseClase } from '../js/baseClase.js';

export class MasaClase extends BaseClase {
    constructor() {
        super("Receta de Masa"); // Pasamos el título al padre
    }

    render(datos) {
        // Definimos cómo queremos que se vea la lista de ingredientes
        const template = (items) => `
            <ul class="lista-ingredientes">
                ${items.map(item => `
                    <li>
                        <span class="nombre">${item.nombre}</span>
                        <span class="cantidad">${item.cantidad} gr</span>
                    </li>
                `).join('')}
            </ul>
        `;

        // Llamamos al render del padre
        super.render(datos, template);
    }
}