import Reveal from "./Reveal";
import { dictionaries, type Lang } from "@/lib/i18n";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className="h-5 w-5 shrink-0 text-[var(--accent)]"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function Pricing({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].pricing;
  const contactHref = lang === "en" ? "/en#contact" : "/#contact";

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <Reveal>
        <h2 className="flex items-center gap-2 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          {t.heading}
        </h2>
        <p className="mt-3 max-w-lg text-sm text-black/50">{t.subtitle}</p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-2">
        {t.packages.map((pkg, i) => (
          <Reveal
            key={pkg.name}
            delay={i * 100}
            className="relative flex flex-col rounded-3xl bg-black p-8 text-white sm:p-10"
          >
            {pkg.popular && (
              <span className="absolute right-6 top-6 rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                {t.popular}
              </span>
            )}

            <p className="text-sm font-bold uppercase tracking-wide text-white/50">{pkg.name}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-black text-[var(--accent)] sm:text-6xl">{pkg.price}</span>
              <span className="text-lg font-bold text-white/50">{t.per}</span>
            </div>
            {pkg.growthNote && <p className="mt-2 text-xs text-white/40">{pkg.growthNote}</p>}

            <ul className="mt-8 mb-8 space-y-4">
              {pkg.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={contactHref}
              className="mt-auto block w-full rounded-full bg-[var(--accent)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
            >
              {t.cta}
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-xs leading-5 text-black/40">{t.note}</p>
    </section>
  );
}
