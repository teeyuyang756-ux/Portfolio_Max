const navLinks = [
  { href: "/#about", label: "介绍" },
  { href: "/pricing", label: "价格" },
  { href: "/#projects", label: "作品" },
  { href: "/#contact", label: "联系" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center gap-x-4 gap-y-3 px-4 py-3 sm:flex sm:h-20 sm:justify-between sm:px-6 sm:py-0">
        <a href="/#top" className="text-base font-black uppercase tracking-tight text-black sm:order-1 sm:text-lg">
          你好，我叫MAX
        </a>
        <nav className="col-span-2 flex items-center justify-center gap-6 sm:order-2 sm:col-auto sm:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wide text-black/60 transition-colors hover:text-black sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/#contact"
          aria-label="联系我"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-black transition-transform hover:scale-105 sm:order-3"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </div>
    </header>
  );
}
