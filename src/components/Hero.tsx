import Image from "next/image";
import Reveal from "./Reveal";

const serviceSteps = [
  { number: "01", label: "策划", image: "/step-planning.jpg" },
  { number: "02", label: "拍摄", image: "/step-filming.webp" },
  { number: "03", label: "剪辑", image: "/step-editing.webp" },
  { number: "04", label: "管理与发布", image: "/step-publishing.webp" },
];

export default function Hero() {
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
            这就是麦克斯
          </span>
        </div>

        <div className="relative flex min-h-[560px] flex-col p-8 sm:p-12">
          <Reveal className="max-w-lg">
            <span className="inline-block bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
             Social Media Marketing 接单中
            </span>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[1.5] tracking-tight text-white sm:text-6xl">
              策划到发布
              <br />
              <span className="box-decoration-clone bg-[var(--accent)] px-2 py-1 text-black">Social Media</span>
              <br />
              交给我
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/70">
              两年的 Agency 经验。与其一次过 handle 十几二十家公司的内容，
              现在的我更想去专注几个账号产出更好的内容。
            </p>
            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
            >
              查看作品
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-20 grid grid-cols-2 gap-4 rounded-3xl bg-[var(--accent)] p-8 sm:p-12 lg:h-[560px] lg:grid-cols-6 lg:grid-rows-2">
        <div className="relative col-span-2 aspect-4/3 overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:h-full">
          <Image
            src="/banner-3.png"
            alt="专注工作"
            fill
            className="object-cover"
          />
        </div>

        <div className="col-span-2 rounded-2xl bg-white p-6 sm:p-8 lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-wide text-black/50">服务流程</p>
          <h2 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight text-black sm:text-3xl">
            从策划到发布的完整服务
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-black/60">
            我相信好的产品是工程与设计共同作用的结果。
            比起炫技，我更在意最终体验是否顺畅、是否真的解决了问题。
          </p>
          <a
            href="#projects"
            className="mt-4 inline-block rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
          >
            查看服务
          </a>
        </div>

        {serviceSteps.map((step) => (
          <div
            key={step.label}
            className="relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl p-5 text-white"
          >
            <Image src={step.image} alt={step.label} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <p className="relative text-xs font-bold uppercase tracking-wide text-white/70">{step.number}</p>
            <p className="relative text-lg font-black">{step.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
