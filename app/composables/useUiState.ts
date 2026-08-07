export function useUiState() {
  const isOpen = useState("isOpen", () => false);
  const isDesktop = useState("isDesktop", () => false);
  const scrollY = useState("scrollY", () => 0);

  return { isOpen, isDesktop, scrollY };
}
