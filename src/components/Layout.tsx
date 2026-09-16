import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { Menu, X, Globe, Phone } from "lucide-react";
import { useLang } from "@/providers/lang";

const NAV = [
  { to: "/", ar: "الرئيسية", en: "Home" },
  { to: "/why", ar: "لماذا القبة", en: "Why Domes" },
  { to: "/designs", ar: "التصاميم", en: "Designs" },
  { to: "/materials", ar: "المواد", en: "Materials" },
  { to: "/prices", ar: "الأسعار", en: "Prices" },
  { to: "/story", ar: "القصة والحرفة", en: "Story & Craft" },
  { to: "/developers", ar: "شراكات ومشاريع", en: "Partners & Projects" },
  { to: "/contact", ar: "تواصل", en: "Contact" },
];

function WhatsAppFloat() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  return (
    <a
      href="https://wa.me/96891352723"
      target="_blank"
      rel="noreferrer"
      aria-label={isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
      className="fixed bottom-5 end-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 9.88 9.89c0 5.45-4.43 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.87 11.87 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"/>
      </svg>
      <span className="text-sm font-bold">{isAr ? "واتساب" : "WhatsApp"}</span>
    </a>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { lang, setLang } = useLang();
  const isAr = lang === "ar";

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setOpen(false);
  }, [loc.pathname]);

  const toggle = (
    <button
      onClick={() => setLang(isAr ? "en" : "ar")}
      className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-4 py-1.5 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      {isAr ? "EN" : "عربي"}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-3 text-foreground">
            <img src="/media/logo-mark.png" alt="Vault House" className="h-9 w-auto" />
            <span className="font-display text-xl font-bold">
              {isAr ? "بيت القبة" : "Vault House"}
            </span>
            <span className="font-latin hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
              Eco-Dome Design + Build · Oman
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-primary ${
                    isActive ? "font-bold text-primary" : "text-foreground/75"
                  }`
                }
              >
                {isAr ? n.ar : n.en}
              </NavLink>
            ))}
            {toggle}
          </nav>
          <div className="flex items-center gap-3 lg:hidden">
            {toggle}
            <button
              className="text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `py-1 text-base ${isActive ? "font-bold text-primary" : "text-foreground/80"}`
                  }
                >
                  {isAr ? n.ar : n.en}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
      <WhatsAppFloat />

      <footer className="mt-24 bg-[#2b1703] text-[#f5ece5]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <img src="/media/logo-mark-light.png" alt="Vault House" className="h-10 w-auto" />
              <span className="font-display text-2xl font-bold">
                {isAr ? "بيت القبة" : "Vault House"}
              </span>
            </div>
            <p className="text-sm leading-8 text-[#f5ece5]/70">
              {isAr
                ? "ورشة معمارية في مسقط تدرس القباب الانضغاطية وتصمّمها لمناخ الخليج — الهندسة المستدامة والبناء الذكي بأرقام صادقة."
                : "An architecture workshop in Muscat researching and designing compression-only domes for the Gulf climate — sustainable engineering and smart building with honest numbers."}
            </p>
            <p className="font-latin mt-4 text-[10px] uppercase tracking-[0.3em] text-[#bc773f]">
              Eco Dome Homes — Oman
            </p>
          </div>
          <div>
            <h4 className="font-display mb-4 text-lg font-bold">{isAr ? "الصفحات" : "Pages"}</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#f5ece5]/75">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors hover:text-[#bc773f]">
                    {isAr ? n.ar : n.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display mb-4 text-lg font-bold">
              {isAr ? "تواصل مباشر" : "Direct contact"}
            </h4>
            <ul
              className="space-y-2 text-sm text-[#f5ece5]/75"
              dir="ltr"
              style={{ textAlign: isAr ? "right" : "left" }}
            >
              <li>
                <a
                  href="mailto:info@vaulthouse.om"
                  className="transition-colors hover:text-[#bc773f]"
                >
                  info@vaulthouse.om
                </a>
              </li>
              <li>+968 9135 2723</li>
              <li>
                <a
                  href="https://www.youtube.com/@refaatnassif"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#bc773f]"
                >
                  youtube.com/@refaatnassif
                </a>
              </li>
              <li>{isAr ? "مسقط، سلطنة عُمان" : "Muscat, Sultanate of Oman"}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#f5ece5]/10 py-5 text-center text-xs text-[#f5ece5]/45">
          {isAr
            ? `بيت القبة © ${new Date().getFullYear()} — بُني بعناية في مسقط · eco construction · durable architecture · البناء المستدام`
            : `Vault House © ${new Date().getFullYear()} — crafted in Muscat · eco construction · durable architecture · sustainable building`}
        </div>
      </footer>
    </div>
  );
}
