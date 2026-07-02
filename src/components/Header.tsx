const navLinks = [
  { href: "#about", label: "介绍" },
  { href: "#projects", label: "作品" },
  { href: "#contact", label: "联系" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-black uppercase tracking-tight text-black">
          你的名字
        </a>
        <nav className="hidden items-center gap-10 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-black/60 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          aria-label="联系我"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-black transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </div>
    </header>
  );
}
