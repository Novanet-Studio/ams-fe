import { normalizeCategoria } from '~/utils/normalizers'

export default function useCategorias() {
  const { get } = useKairos()

  async function getCategorias() {
    try {
      const data = await get<any>('categorias')
      if (!data?.length)
        return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: data.map(normalizeCategoria) }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  return { getCategorias }
}
