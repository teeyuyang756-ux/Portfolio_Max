import Image from "next/image";
import Reveal from "./Reveal";
import { dictionaries, type Lang } from "@/lib/i18n";

const stepImages = ["/step-planning.jpg", "/step-filming.webp", "/step-editing.webp", "/step-publishing.webp"];

export default function Hero({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].hero;
  const projectsHref = lang === "en" ? "/en#projects" : "/#projects";

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pt-32">
      <div className="relative overflow-hidden rounded-3xl">
        <Image src="/hero-banner-3.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <span
            className="absolute -rotate-3 font-serif text-lg italic text-[var(--accent)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
            style={{ top: "7%", left: "62%" }}
          >
            {t.annotation}
          </span>
        </div>

        <div className="relative flex min-h-[560px] flex-col p-8 sm:p-12">
          <Reveal className="max-w-lg">
            <span className="inline-block bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
              {t.tag}
            </span>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[1.5] tracking-tight text-white sm:text-6xl">
              {t.headlineLine1}
              <br />
              <span className="box-decoration-clone bg-[var(--accent)] px-2 py-1 text-black">{t.headlineHighlight}</span>
              <br />
              {t.headlineLine3}
            </h1>
            <a
              href={projectsHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
            >
              {t.ctaWork}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-20 grid grid-cols-2 gap-4 rounded-3xl bg-[var(--accent)] p-8 sm:p-12 lg:h-[560px] lg:grid-cols-6 lg:grid-rows-2">
        <div className="relative col-span-2 aspect-4/3 overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:h-full">
          <Image src="/banner-3.png" alt="" fill className="object-cover" />
        </div>

        <div className="col-span-2 rounded-2xl bg-white p-6 sm:p-8 lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-wide text-black/50">{t.serviceEyebrow}</p>
          <h2 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight text-black sm:text-3xl">
            {t.serviceHeading}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-black/60">{t.serviceDesc}</p>
          <a
            href={projectsHref}
            className="mt-4 inline-block rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            {t.ctaService}
          </a>
        </div>

        {t.steps.map((label, i) => (
          <div
            key={label}
            className="relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl p-5 text-white"
          >
            <Image src={stepImages[i]} alt={label} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <p className="relative text-xs font-bold uppercase tracking-wide text-white/70">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="relative text-lg font-black">{label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
