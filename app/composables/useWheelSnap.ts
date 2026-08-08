import type { Ref } from "vue";

function isMouseWheel(e: WheelEvent) {
  if (e.deltaMode !== 0) return true;
  return Math.abs(e.deltaY) >= 100 && Number.isInteger(e.deltaY);
}

export function useWheelSnap(containerRef: Ref<HTMLElement | null>) {
  let isSnapping = false;
  let unlockTimeout: ReturnType<typeof setTimeout> | null = null;

  function getSections() {
    return Array.from(
      document.querySelectorAll<HTMLElement>("section.snap-start[id]"),
    );
  }

  function currentSectionIndex(sections: HTMLElement[], scrollTop: number) {
    let closest = 0;
    let minDist = Infinity;
    sections.forEach((section, i) => {
      const dist = Math.abs(section.offsetTop - scrollTop);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    return closest;
  }

  function unlock() {
    isSnapping = false;
    if (unlockTimeout) clearTimeout(unlockTimeout);
    unlockTimeout = null;
  }

  function onWheel(e: WheelEvent) {
    if (isSnapping || !isMouseWheel(e)) return;

    const container = containerRef.value;
    if (!container) return;

    const sections = getSections();
    if (!sections.length) return;

    const idx = currentSectionIndex(sections, container.scrollTop);
    const targetIdx =
      e.deltaY > 0
        ? Math.min(idx + 1, sections.length - 1)
        : Math.max(idx - 1, 0);

    if (targetIdx === idx) return;

    e.preventDefault();
    isSnapping = true;
    unlockTimeout = setTimeout(unlock, 1000);
    sections[targetIdx].scrollIntoView({ behavior: "smooth" });
  }

  function init() {
    const container = containerRef.value;
    if (!container) return;
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("scrollend", unlock);
  }

  function cleanup() {
    const container = containerRef.value;
    if (!container) return;
    container.removeEventListener("wheel", onWheel);
    container.removeEventListener("scrollend", unlock);
    if (unlockTimeout) clearTimeout(unlockTimeout);
  }

  return { init, cleanup };
}
