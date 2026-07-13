import type { ReactNode } from "react";
import { BsRobot, BsSoundwave } from "react-icons/bs";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbApi } from "react-icons/tb";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";

type Service = {
  index: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    index: "01",
    icon: <BsRobot />,
    title: "AI Agents & Automation",
    description:
      "Autonomous agents and RAG pipelines that reason over your data and automate real workflows — cutting manual work, not corners.",
    tags: ["LangChain", "LangGraph", "RAG", "Automation"],
  },
  {
    index: "02",
    icon: <BsSoundwave />,
    title: "Voice AI Agents",
    description:
      "Production-grade, real-time voice agents that handle conversations at sub-500ms latency — answering, booking, and qualifying 24/7.",
    tags: ["VAPI", "Realtime", "Telephony", "LLMs"],
  },
  {
    index: "03",
    icon: <HiOutlineRocketLaunch />,
    title: "SaaS Platforms",
    description:
      "End-to-end product builds — from architecture to launch. Fast, scalable, and polished front to back, ready for real users.",
    tags: ["React", "Next.js", "Node.js", "Postgres"],
  },
  {
    index: "04",
    icon: <TbApi />,
    title: "APIs & Integrations",
    description:
      "Robust backends and clean APIs that connect your stack — third-party integrations, webhooks, and services built to scale.",
    tags: ["REST", "Webhooks", "Express", "Databases"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="What I build for you"
          description="Whatever the idea, I take it from concept to production — with the AI depth of a specialist and the range of a full-stack engineer."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="panel panel-hover group relative h-full overflow-hidden p-7 md:p-8">
                {/* faint index */}
                <span className="pointer-events-none absolute right-5 top-3 font-display text-6xl font-bold text-white/[0.04] transition-colors group-hover:text-accent/10">
                  {s.index}
                </span>

                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-2xl text-accent ring-1 ring-accent/20 transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </span>

                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-white/55">
                  {s.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
