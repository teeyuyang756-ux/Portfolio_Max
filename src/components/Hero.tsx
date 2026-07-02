import Image from "next/image";

const stats = [
  { value: "5+", label: "年开发经验" },
  { value: "30+", label: "完成项目" },
  { value: "98%", label: "客户满意度" },
  { value: "10+", label: "技术栈掌握" },
];

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pt-32">
      <div className="grid items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <span className="inline-block bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
            个人网站 · 全栈开发者
          </span>
          <h1 className="mt-6 text-6xl font-black uppercase leading-[0.95] tracking-tight text-black sm:text-7xl">
            我创造
            <br />
            有影响力
            <br />
            的产品
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-black/60">
            你的名字是一名全栈开发者，专注于把复杂问题拆解成简单优雅的解决方案，
            用技术和设计思维帮助想法快速落地。
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            查看作品
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-black">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-black/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square w-full overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
            <Image
              src="https://picsum.photos/seed/your-workspace/800/800"
              alt="工作场景"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded-full bg-black text-center text-xs font-bold uppercase leading-tight text-white">
            开放
            <br />
            合作
          </div>
        </div>
      </div>

      <div className="grid items-center gap-10 border-t border-black/10 py-20 lg:grid-cols-2">
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl">
          <div className="absolute -inset-4 -z-10 rotate-3 bg-[var(--accent)]" />
          <Image
            src="https://picsum.photos/seed/focus-work/600/750"
            alt="专注工作"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-4xl">
            技术服务于
            <span className="ml-2 bg-[var(--accent)] px-2">设计</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-black/60">
            我相信好的产品是工程与设计共同作用的结果。
            比起炫技，我更在意最终体验是否顺畅、是否真的解决了问题。
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            查看服务
          </a>
        </div>
      </div>
    </section>
  );
}
