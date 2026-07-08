"use client";

import { usePathname } from "next/navigation";
import { dictionaries } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const lang = isEn ? "en" : "zh";
  const t = dictionaries[lang];

  const anchor = (id: string) => (isEn ? `/en#${id}` : `/#${id}`);
  const pricingHref = isEn ? "/en/pricing" : "/pricing";

  const toggleHref = isEn
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname === "/"
      ? "/en"
      : `/en${pathname}`;

  const navLinks = [
    { href: anchor("about"), label: t.nav.about },
    { href: pricingHref, label: t.nav.pricing },
    { href: anchor("projects"), label: t.nav.work },
    { href: anchor("contact"), label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center gap-x-4 gap-y-3 px-4 py-3 sm:flex sm:h-20 sm:justify-between sm:px-6 sm:py-0">
        <a href={anchor("top")} className="text-base font-black uppercase tracking-tight text-black sm:order-1 sm:text-lg">
          {t.header.brand}
        </a>
        <nav className="col-span-2 flex items-center justify-center gap-6 sm:order-2 sm:col-auto sm:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wide text-black/60 transition-colors hover:text-black sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3 sm:order-3">
          <a
            href={toggleHref}
            className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-black/70 transition-colors hover:border-black hover:text-black"
          >
            {t.header.toggle}
          </a>
          <a
            href={anchor("contact")}
            aria-label={t.header.contactAria}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-black transition-transform hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
