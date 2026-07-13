import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IoArrowForward, IoArrowDown } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { BsRobot, BsSoundwave, BsLightningChargeFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import ProjectInquiryModal from "../common/ProjectInquiryModal";
import { Magnetic } from "../common/Magnetic";
import { EASE } from "../../lib/motion";

const stats = [
  { value: "5+", label: "Years shipping" },
  { value: "100K+", label: "Users impacted" },
  { value: "200+", label: "Daily AI calls" },
  { value: "<500ms", label: "Voice latency" },
];

const consoleRows = [
  { icon: <BsRobot />, title: "AI Agents", meta: "deployed" },
  { icon: <BsSoundwave />, title: "Voice AI", meta: "sub-500ms" },
  { icon: <BsLightningChargeFill />, title: "Automation", meta: "60% handled" },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const handleSpotlight = (e: MouseEvent<HTMLElement>) => {
    if (reduce || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: EASE, delay },
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleSpotlight}
      className="relative overflow-hidden pb-16 pt-32 sm:pb-24 lg:pt-40"
    >
      {/* mouse-follow spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(52,211,153,0.10), transparent 65%)",
        }}
      />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* ---- Left: copy ---- */}
        <div className="max-w-2xl">
          <motion.div {...fade(0)}>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-tight"
          >
            <span className="text-gradient">I build </span>
            <span className="text-aurora">
              <span className="whitespace-nowrap">AI-powered</span> products
            </span>
            <span className="text-gradient"> that solve real problems.</span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Full-Stack Engineer turning complex ideas into production-ready AI
            applications — from intelligent automation to Voice AI, I ship
            products that deliver results.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.4}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary text-[15px]"
              >
                Start a project
                <IoArrowForward />
              </button>
            </Magnetic>
            <a href="#work" className="btn btn-outline text-[15px]">
              View my work
              <HiOutlineBriefcase />
            </a>
          </motion.div>

          {/* proof stats */}
          <motion.dl
            {...fade(0.34)}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/10 pl-4">
                <dt className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-white/45">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ---- Right: AI console card ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />
          <div className="panel overflow-hidden rounded-3xl p-5 sm:p-6">
            {/* window chrome */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              </div>
              <span className="font-mono text-[11px] tracking-wide text-white/45">
                systems · online
              </span>
            </div>

            {/* animated core */}
            <div className="relative flex h-40 items-center justify-center">
              <span className="pointer-events-none absolute h-24 w-24 rounded-full border border-accent/30 animate-pulse-ring" />
              <span
                className="pointer-events-none absolute h-24 w-24 rounded-full border border-accent/30 animate-pulse-ring"
                style={{ animationDelay: "1.2s" }}
              />
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-sky-400/10 text-2xl text-accent ring-1 ring-accent/40 shadow-glow">
                <BsRobot />
              </div>
            </div>

            {/* capability rows */}
            <div className="mt-2 space-y-2">
              {consoleRows.map((row, i) => (
                <motion.div
                  key={row.title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.6 + i * 0.15 }}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3.5 py-3 ring-1 ring-inset ring-white/10"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-accent">
                    {row.icon}
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {row.title}
                  </span>
                  <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-white/50">
                    <FiCheck className="text-accent" />
                    {row.meta}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="mt-16 flex justify-center lg:mt-10">
        <a
          href="#about"
          aria-label="Scroll to about"
          className="flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <IoArrowDown className="animate-bounce" />
        </a>
      </div>

      <ProjectInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
