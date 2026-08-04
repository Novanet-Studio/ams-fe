export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const getImage = (name: string) => name.replace('.png', '')

export const getImageUrl = (path: string | undefined) => {
  if (!path) return ''
  if (path.startsWith('/')) {
    const config = useRuntimeConfig()
    return `${config.public.kairosApiUrl ?? 'http://localhost:1337'}${path}`
  }
  return path
}
