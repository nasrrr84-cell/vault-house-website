import { useEffect } from "react";
import { useT } from "@/providers/lang";

/** Sets document title + meta description per page (bilingual). */
export default function Seo({ titleAr, titleEn, descAr, descEn }: { titleAr: string; titleEn: string; descAr: string; descEn: string }) {
  const t = useT();
  useEffect(() => {
    document.title = `${t(titleAr, titleEn)} | بيت القبة — Vault House`;
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "description";
      document.head.appendChild(m);
    }
    m.content = t(descAr, descEn);
  }, [t, titleAr, titleEn, descAr, descEn]);
  return null;
}
