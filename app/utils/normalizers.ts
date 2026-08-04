import type { Categoria, Subcategoria, Producto, Evento } from '~/types'

// Aplana el record crudo de la API pública de Kairos (claves en inglés + relaciones
// en `relations.<fieldKey>[].data`) al modelo de dominio en español que consume el FE.

export function normalizeCategoria(raw: any): Categoria {
  return {
    nombre: raw?.name,
    slug: raw?.slug,
    descripcion: raw?.description,
    imagen: raw?.image,
  }
}

export function normalizeSubcategoria(raw: any): Subcategoria {
  const cat = raw?.relations?.cateogria?.[0]?.data
  return {
    nombre: raw?.name,
    slug: raw?.slug,
    imagen: raw?.image,
    categoria: cat ? normalizeCategoria(cat) : undefined,
  }
}

export function normalizeProducto(raw: any): Producto {
  const sub = raw?.relations?.subcategoria?.[0]?.data
  return {
    nombre: raw?.name,
    slug: raw?.slug,
    imagen: raw?.image,
    link: raw?.link,
    marca: raw?.relations?.brand?.[0]?.data?.name,
    subcategoria: sub ? normalizeSubcategoria(sub) : undefined,
  }
}

// eventos no tiene campo slug en el schema; se deriva del título para usarlo como :key.
function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(new RegExp('[\\u0300-\\u036f]', 'g'), '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function normalizeEvento(raw: any): Evento {
  return {
    titulo: raw?.title,
    slug: raw?.slug ?? slugify(raw?.title ?? ''),
    descripcion: raw?.description,
    ubicacion: raw?.location,
    estado: raw?.status,
    tipo_evento: raw?.event_type,
    organizador: raw?.organizer,
    info: raw?.info,
    imagen_portada: raw?.portrait,
    brochure: raw?.brochure,
    fecha_inicio: raw?.date_start,
    fecha_fin: raw?.date_end,
  }
}
