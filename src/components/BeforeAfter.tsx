import Image from "next/image";
import Reveal from "./Reveal";

const metrics = [
  { label: "粉丝数", before: "1,200", after: "12,000" },
  {
    label: "平均互动率",
    sublabel: "(点赞 + 评论 + 分享 ÷ 粉丝数)",
    before: "1.2%",
    after: "8.5%",
  },
  { label: "单条内容平均曝光量", before: "100~", after: "20K++" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="mx-auto max-w-6xl border-t border-black/10 px-6 py-24">
      <Reveal>
        <h2 className="flex items-center gap-2 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          Before &amp; After 
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-10 rounded-3xl bg-black p-6 sm:p-10">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="text-2xl font-black text-white/40 sm:text-3xl">100</span>
          <ArrowIcon />
          <span className="text-2xl font-black text-white/70 sm:text-3xl">2.3K</span>
          <ArrowIcon />
          <span className="text-3xl font-black text-[var(--accent)] sm:text-4xl">10K</span>
          <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
            ↑ 9,900%
          </span>
        </div>
        <p className="mt-4 text-center text-xs font-medium uppercase tracking-wide text-white/40">
          单条内容平均曝光量变化
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-black/10 bg-zinc-100 p-6 sm:p-8">
          <span className="inline-block rounded-full bg-black/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black/50">
            Before
          </span>

          <div className="relative mx-auto mt-6 aspect-9/16 w-full max-w-[220px] overflow-hidden rounded-2xl grayscale">
            <Image
              src="/before-content.png"
              alt="合作前内容截图"
              fill
              className="object-cover opacity-70"
            />
          </div>

          <div className="mt-8 space-y-5">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-baseline justify-between border-b border-black/10 pb-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/40">{metric.label}</p>
                  {metric.sublabel && <p className="text-[10px] text-black/30">{metric.sublabel}</p>}
                </div>
                <p className="text-xl font-black text-black/40">{metric.before}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="rounded-3xl bg-[var(--accent)] p-6 sm:p-8">
          <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            After
          </span>

          <div className="relative mx-auto mt-6 aspect-9/16 w-full max-w-[220px] overflow-hidden rounded-2xl">
            <Image
              src="/after-content.png"
              alt="合作后内容截图"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-8 space-y-5">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-baseline justify-between border-b border-black/20 pb-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/60">{metric.label}</p>
                  {metric.sublabel && <p className="text-[10px] text-black/40">{metric.sublabel}</p>}
                </div>
                <p className="text-xl font-black text-black">{metric.after}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <p className="mt-8 text-center text-xs leading-5 text-black/40">
        * 以上数据为占位示意，实际效果将在项目完成后替换为真实数据。数据表现因账号基础、行业类目及内容类型而异，不构成收益保证或承诺。
      </p>
    </section>
  );
}
