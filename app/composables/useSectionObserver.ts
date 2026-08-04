import { onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import type { COLORS_MAP_KEYS } from '~/types'

let observer: IntersectionObserver | null = null

export function useSectionObserver() {
  const route = useRoute()

  const currentColor = useState<COLORS_MAP_KEYS>('currentColor', () => 'light')
  const currentEmblemColor = useState<COLORS_MAP_KEYS>(
    'currentEmblemColor',
    () => 'light',
  )
  const currentCopyrightColor = useState<COLORS_MAP_KEYS>(
    'currentCopyrightColor',
    () => 'light',
  )
  const visibleSectionIds = useState<Set<string>>(
    'visibleSectionIds',
    () => new Set(),
  )
  const animatedSectionIds = useState<Set<string>>(
    'animatedSectionIds',
    () => new Set(),
  )

  const initObserver = () => {
    if (!import.meta.client) return

    if (observer) observer.disconnect()

    visibleSectionIds.value.clear()

    const options = { threshold: 0.5 }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetElement = entry.target as HTMLElement
        const targetId = targetElement.id
        const targetColor = (targetElement.dataset.color ||
          'light') as COLORS_MAP_KEYS
        const targetEmblemColor = (targetElement.dataset.emblemColor ||
          targetColor) as COLORS_MAP_KEYS
        const targetCopyrightColor = (targetElement.dataset.copyrightColor ||
          targetColor) as COLORS_MAP_KEYS

        if (!targetId) return

        if (entry.isIntersecting) {
          currentColor.value = targetColor
          currentEmblemColor.value = targetEmblemColor
          currentCopyrightColor.value = targetCopyrightColor

          if (!visibleSectionIds.value.has(targetId))
            visibleSectionIds.value.add(targetId)
          if (!animatedSectionIds.value.has(targetId))
            animatedSectionIds.value.add(targetId)
        } else {
          visibleSectionIds.value.delete(targetId)
        }
      })
    }, options)

    nextTick(() => {
      document
        .querySelectorAll<HTMLElement>('section[data-color][id]')
        .forEach((section) => observer!.observe(section))
    })
  }

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  const hasBeenAnimated = (id: string) => animatedSectionIds.value.has(id)

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const watchUrlHash = () => {
    const hash = route.hash
    if (hash) scrollToSection(hash.replace('#', ''))
    return null
  }

  return {
    currentColor,
    currentEmblemColor,
    currentCopyrightColor,
    hasBeenAnimated,
    initObserver,
    scrollToSection,
    watchUrlHash,
  }
}
