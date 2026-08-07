import { normalizeSubcategoria } from "~/utils/normalizers";

export default function useSubcategorias() {
  const { get } = useKairos();

  async function getSubcategorias(categoriaSlug: string) {
    try {
      const data = await get<any>("subcategorias", {
        "relation[cateogria][slug]": categoriaSlug,
        populate: "cateogria",
      });
      if (!data?.length)
        return { status: "error", message: "No data", data: null };
      return {
        status: "ok",
        message: "ok",
        data: data.map(normalizeSubcategoria),
      };
    } catch {
      return { status: "error", message: "Unknown error", data: null };
    }
  }

  return { getSubcategorias };
}
