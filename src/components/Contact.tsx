import Image from "next/image";

const links = [
  { label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { label: "GitHub", value: "github.com/yourname", href: "https://github.com/yourname" },
  { label: "LinkedIn", value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname" },
  { label: "X / Twitter", value: "@yourname", href: "https://x.com/yourname" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 py-28 text-white">
      <Image
        src="https://picsum.photos/seed/dark-texture/1600/900"
        alt=""
        fill
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/80" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl">
              让我们开始
              <span className="ml-2 bg-[var(--accent)] px-2 text-black">合作</span>
              吧
            </h2>
            <a
              href="mailto:your@email.com"
              className="mt-8 inline-block rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
            >
              发邮件给我
            </a>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-12">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  className="text-sm font-medium uppercase tracking-wide text-white/60 transition-colors hover:text-white"
                >
                  {link.label} <span className="text-white/30">— {link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
