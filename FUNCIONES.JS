export 
function normalizar(s) {
  return s
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function construirIndiceNombreACodigo(insumos) {
  const index = new Map();
  for (const [cod, nombre] of Object.entries(insumos)) {
    index.set(normalizar(nombre), Number(cod));
  }
  return index;
}

/**
 * Devuelve un array de insumos en formato:
 * { codigo: number|null, nombre: string }
 */
export function insumosDeRecetaMinimal(receta, { insumos, aliases = {} }) {
   const idx = construirIndiceNombreACodigo(insumos);

  return receta.ingredientes.map(({ nombre }) => {
    const nNorm = normalizar(nombre);
    const alias = aliases[nombre] ?? aliases[nNorm] ?? null;
    const efectivo = alias === null ? nombre : (alias || nombre);
    const eNorm = normalizar(efectivo);

    const codigo = alias === null ? null : (idx.get(eNorm) ?? null);

    return { codigo, nombre: efectivo };
  });
}