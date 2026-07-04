import Reveal from "./Reveal";

const deliverables = [
  "每周 3 支视频 + 2 张图片内容",
  "IG / Facebook / TikTok / 小红书",
  "内容策划",
  "拍摄设备提供",
  "剪辑制作",
  "文案撰写",
  "上传与账号管理",
  "Influencer 对接",
];

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

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <Reveal>
        <h2 className="flex items-center gap-2 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          价格方案
        </h2>
        <p className="mt-3 max-w-lg text-sm text-black/50">简单透明的合作报价</p>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-10 max-w-xl rounded-3xl bg-black p-8 text-white sm:p-12">
        <p className="text-sm font-bold uppercase tracking-wide text-white/50">标准配套</p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-5xl font-black text-[var(--accent)] sm:text-6xl">RM2,800</span>
          <span className="text-lg font-bold text-white/50">/ 月</span>
        </div>
        <p className="mt-2 text-xs text-white/40">预计一个月会有 12-13 个视频 + 8-9 个图形内容</p>

        <ul className="mt-8 space-y-4">
          {deliverables.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-white/80">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl bg-white/5 p-4">
          <p className="text-xs leading-5 text-white/40">* 不包含出镜 / 演员人员，如需要另外报价洽谈。</p>
        </div>

        <a
          href="/#contact"
          className="mt-8 block w-full rounded-full bg-[var(--accent)] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
        >
          预约咨询
        </a>
      </Reveal>
    </section>
  );
}
