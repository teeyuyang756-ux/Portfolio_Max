import Image from "next/image";

type Domain = {
  title: string;
  tag: string;
  href: string;
  image: string;
};

const domains: Domain[] = [
  {
    title: "房产",
    tag: "行业案例",
    href: "#",
    image: "https://loremflickr.com/600/450/real-estate,architecture?lock=101",
  },
  {
    title: "美食 / 餐厅",
    tag: "行业案例",
    href: "#",
    image: "https://loremflickr.com/600/450/restaurant,food?lock=102",
  },
  {
    title: "装修 / 室内设计",
    tag: "行业案例",
    href: "#",
    image: "https://loremflickr.com/600/450/interior,design?lock=103",
  },
  {
    title: "AI / 科技",
    tag: "行业案例",
    href: "#",
    image: "https://loremflickr.com/600/450/technology,ai?lock=104",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-24">
      <div className="flex items-end justify-between">
        <h2 className="flex items-center gap-2 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          领域作品
        </h2>
        <a href="#" className="hidden items-center gap-1 text-sm font-bold uppercase tracking-wide text-black/60 hover:text-black sm:flex">
          查看全部作品
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {domains.map((domain) => (
          <a key={domain.title} href={domain.href} className="group block">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
              <Image
                src={domain.image}
                alt={domain.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-black">{domain.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-black/40">{domain.tag}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
