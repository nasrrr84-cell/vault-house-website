import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "ar",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("bq-lang") as Lang | null;
      if (saved) return saved;
      // first visit: follow the browser language (Arabic-first for Arabic browsers)
      const nav = (navigator.language || "").toLowerCase();
      return nav.startsWith("ar") ? "ar" : "en";
    } catch {
      return "ar";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("bq-lang", lang);
    } catch {}
  }, [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang: setLangState }}>{children}</LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);

/** اختيار نص حسب اللغة */
export function useT() {
  const { lang } = useLang();
  return (ar: string, en: string) => (lang === "ar" ? ar : en);
}
