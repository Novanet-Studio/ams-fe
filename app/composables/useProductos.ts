import { normalizeProducto } from '~/utils/normalizers'

export default function useProductos() {
  const { get } = useKairos()

  async function getProductos(subcategoriaSlug: string) {
    try {
      const data = await get<any>('productos', {
        'relation[subcategoria][slug]': subcategoriaSlug,
        populate: 'subcategoria,brand',
      })
      if (!data?.length)
        return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: data.map(normalizeProducto) }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  return { getProductos }
}
