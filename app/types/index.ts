export type COLORS_MAP_KEYS = "light" | "dark";

export interface KairosEntity {
  relations?: Record<string, { data: any }[]>;
  inverse_relations?: Record<string, { data: any }[]>;
}

export interface Categoria extends KairosEntity {
  nombre: string;
  slug: string;
  descripcion?: string;
  imagen?: string;
}

export interface Subcategoria extends KairosEntity {
  nombre: string;
  slug: string;
  imagen?: string;
  categoria?: Categoria;
}

export interface Producto extends KairosEntity {
  nombre: string;
  slug: string;
  marca?: string;
  link?: string;
  imagen?: string;
  subcategoria?: Subcategoria;
}

export interface Evento extends KairosEntity {
  titulo: string;
  slug: string;
  descripcion?: string;
  ubicacion?: string;
  estado?: string;
  imagen_portada?: string;
  organizador?: string;
  brochure?: string;
  tipo_evento?: string;
  fecha_inicio?: string;
  fecha_fin?: string;
  info?: string;
}
