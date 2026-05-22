# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # servidor de desarrollo
pnpm build        # producción
pnpm preview      # vista previa del build
pnpm check        # type-check con svelte-check
pnpm check:watch  # type-check en modo watch
pnpm lint         # prettier + eslint
pnpm format       # formatear archivos
```

> El gestor de paquetes requerido es **pnpm ≥10**. No usar npm ni yarn.

## Arquitectura

**SvelteKit + Vite**, desplegado en Netlify. SSR deshabilitado globalmente — toda la app corre en el cliente (`ssr = false` en cada `+page.ts`).

### Capas de datos

| Fuente                             | Cuándo se usa                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| Houdini GraphQL (`$houdini`)       | Productos y categorías — consultas autogeneradas en `src/routes/productos/`                    |
| API interna `/api/info?key=<page>` | Metadata de páginas (home, nosotros, etc.) leída desde archivos `.md` en `src/content/`        |
| Datos estáticos en `src/lib/`      | Coaches, marcas, carrusel de imágenes — hardcodeados en `brands.ts`, `coaches.ts`, `images.ts` |

### Enrutamiento

```
src/routes/
  +layout.svelte          ← Header, Footer, Sidebar + registro de Swiper
  +page.svelte / +page.ts ← home (carga via /api/info)
  nosotros/               ← sección About
  productos/              ← listado de categorías
    [category]/           ← subcategorías (Houdini: Subcategories query)
    [category]/[product]/ ← detalle de producto (Houdini)
  coaches/
  contacto/
  api/info/+server.ts     ← importa dinámicamente src/content/<key>.md y retorna metadata
```

### Estilos — UnoCSS

El tema de colores y tipografía se define en **`src/lib/config/theme.json`** y se consume en `uno.config.ts`. Colores disponibles como `color-1` … `color-6` (p. ej. `bg-color-1`, `text-color-2`). Los breakpoints personalizados son `xs / sm / md / lg / xl / 2xl`.

Se usa la sintaxis de variantes agrupadas de UnoCSS: `lg:(flex items-center)`.

### Estado global (`src/lib/store.ts`)

- `isOpen` — menú móvil abierto/cerrado
- `isDesktop` — viewport
- `scrollY` — posición de scroll (bind en `+layout.svelte`)
- `elementColors` — colores del Header (logo, burger, copyright). Los componentes de sección escriben en este store en `onMount` para adaptar el Header a su fondo

### Animaciones

Se usa la librería **Motion** (`motion` npm package — `animate`, `inView`, `timeline`, `stagger`). Las páginas usan `timeline()` para secuencias de entrada y `inView()` para animaciones al hacer scroll. La acción Svelte `src/lib/actions/inView.ts` despacha eventos `enter`/`leave` para coordinar animaciones entre secciones.

### Swiper

Registrado globalmente como custom element en `+layout.svelte` (`register()` de `swiper/element/bundle`). Se usa con la API de web components (`<swiper-container>`, `<swiper-slide>`).

### GraphQL — Houdini

`houdini.config.js` configura el schema URL desde `env.WATCH_SCHEMA_URL`. Los tipos generados se importan desde `./$houdini` en cada route. Los `load` de productos usan variables tipadas (`SubcategoriesVariables`, etc.).

### Componentes

Organizados por sección en `src/lib/components/<sección>/`. Patrones comunes:

- `elementColors` store para tematizar el header según la sección visible
- Acciones Svelte (`use:clickOutside`, `use:inView`) para comportamientos reutilizables
- El layout principal usa `snap-y snap-mandatory` con secciones `snap-start h-screen`
