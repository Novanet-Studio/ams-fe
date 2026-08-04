import { normalizeEvento } from '~/utils/normalizers'

export default function useEventos() {
  const { get } = useKairos()

  async function getEventos() {
    try {
      const data = await get<any>('eventos')
      if (!data?.length)
        return { status: 'error', message: 'No data', data: null }
      return { status: 'ok', message: 'ok', data: data.map(normalizeEvento) }
    } catch {
      return { status: 'error', message: 'Unknown error', data: null }
    }
  }

  return { getEventos }
}
