"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import Reveal from "./Reveal";

type Work = { src: string; label: string };

const works: Work[] = [
  { src: "/work-1.mp4", label: "房产" },
  { src: "/work-2.mp4", label: "房产" },
  { src: "/work-3.mp4", label: "房产" },
  { src: "/work-4.mp4", label: "房产" },
  { src: "/work-5.mp4", label: "房产" },
  { src: "/work-6.mp4", label: "美食 / 餐厅" },
  { src: "/work-7.mp4", label: "装修 / 室内设计" },
  { src: "/work-8.mp4", label: "装修 / 室内设计" },
  { src: "/work-9.mp4", label: "装修 / 室内设计" },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 translate-x-px">
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

function VideoCard({ work }: { work: Work }) {
  const ref = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    ref.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    const v = ref.current;
    if (v) {
      v.pause();
      v.currentTime = 0.1;
    }
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group/vid relative h-full w-full overflow-hidden rounded-2xl border-4 border-white bg-black shadow-md"
    >
      <video
        ref={ref}
        src={`${work.src}#t=0.1`}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-black transition-opacity group-hover/vid:opacity-0">
        <PlayIcon />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3">
        <p className="text-xs font-black uppercase leading-tight text-white">{work.label}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const count = works.length;

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl overflow-x-hidden border-t border-black/10 px-6 py-24"
    >
      <Reveal className="flex items-end justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-3xl font-black uppercase tracking-tight text-black sm:text-4xl">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            领域作品
          </h2>
          <p className="mt-3 text-sm text-black/50">悬停展开 · 共 9 支作品</p>
        </div>
      </Reveal>

      {/* Desktop: fan-out deck */}
      <Reveal delay={100} className="mt-8 hidden lg:block">
        <div className="video-stack relative mx-auto h-[420px] w-full">
          {works.map((work, i) => {
            const fanIndex = i - (count - 1) / 2;

            const restTransform = `translate(-50%, -50%) rotate(${fanIndex * 3}deg) translateX(${fanIndex * 14}px) translateY(${Math.abs(fanIndex) * 3}px)`;
            const hoverTransform = `translate(-50%, -50%) translateX(${fanIndex * 116}px) translateY(${Math.abs(fanIndex) * 7}px) rotate(${fanIndex * 5}deg) scale(1.03)`;

            const style = {
              "--rest-transform": restTransform,
              "--hover-transform": hoverTransform,
              zIndex: i,
            } as CSSProperties;

            return (
              <div
                key={work.src}
                style={style}
                className="video-stack-item absolute left-1/2 top-1/2 aspect-9/16 w-[150px]"
              >
                <VideoCard work={work} />
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* Mobile / tablet: horizontal scroll row */}
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {works.map((work) => (
          <div key={work.src} className="aspect-9/16 w-[62vw] max-w-[240px] shrink-0 snap-center">
            <VideoCard work={work} />
          </div>
        ))}
      </div>
    </section>
  );
}
