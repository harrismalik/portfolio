import type { ReactNode } from "react";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { BsDatabaseFillGear, BsRobot, BsSoundwave } from "react-icons/bs";
import { DiPython } from "react-icons/di";
import { RiNextjsFill, RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiLaravel, SiLangchain } from "react-icons/si";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";
import { Marquee } from "../common/Marquee";

type Skill = { icon: ReactNode; title: string; info: string };
type Category = { name: string; accent: string; skills: Skill[] };

const categories: Category[] = [
  {
    name: "Frontend",
    accent: "bg-sky-400",
    skills: [
      { icon: <RiReactjsFill />, title: "React", info: "UI library" },
      { icon: <RiNextjsFill />, title: "Next.js", info: "React framework" },
      { icon: <BiLogoTypescript />, title: "TypeScript", info: "Type-safe JS" },
      { icon: <BiLogoTailwindCss />, title: "Tailwind", info: "Utility CSS" },
    ],
  },
  {
    name: "Backend",
    accent: "bg-emerald-400",
    skills: [
      { icon: <RiNodejsLine />, title: "Node.js", info: "JS runtime" },
      { icon: <SiExpress />, title: "Express", info: "API framework" },
      { icon: <DiPython />, title: "Python", info: "AI & backend" },
      { icon: <SiLaravel />, title: "Laravel", info: "PHP framework" },
      { icon: <BsDatabaseFillGear />, title: "Databases", info: "SQL & NoSQL" },
    ],
  },
  {
    name: "AI & Data",
    accent: "bg-violet-400",
    skills: [
      { icon: <BsRobot />, title: "AI Agents", info: "LangChain / LangGraph" },
      { icon: <BsSoundwave />, title: "Voice AI", info: "VAPI & voice models" },
      { icon: <SiLangchain />, title: "LLM APIs", info: "Claude, OpenAI, RAG" },
    ],
  },
];

const allSkills = categories.flatMap((c) => c.skills);

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Toolbox"
          title="The stack I ship with"
          description="Modern AI capabilities combined with battle-tested full-stack technology — optimized for products that need to ship."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {categories.map((cat, ci) => (
            <Reveal key={cat.name} delay={ci * 0.08}>
              <div className="panel h-full p-6">
                <div className="mb-5 flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${cat.accent}`} />
                  <h3 className="font-display text-base font-semibold text-white">
                    {cat.name}
                  </h3>
                  <span className="ml-auto font-mono text-xs text-white/35">
                    {cat.skills.length.toString().padStart(2, "0")}
                  </span>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  {cat.skills.map((s) => (
                    <div
                      key={s.title}
                      className="skill-card group flex items-center gap-3 rounded-xl bg-white/[0.02] p-3 ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/[0.05]"
                    >
                      <span className="border-beam top" />
                      <span className="border-beam bottom" />
                      <figure className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 text-xl text-white/75 transition-colors group-hover:text-accent">
                        {s.icon}
                      </figure>
                      <div className="min-w-0">
                        <h4 className="truncate text-sm font-medium text-white">
                          {s.title}
                        </h4>
                        <p className="truncate text-[11px] text-white/45">
                          {s.info}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* tech marquee */}
        <div className="mt-10">
          <Marquee speed={36} className="py-2">
            {allSkills.map((s) => (
              <span
                key={s.title}
                className="inline-flex items-center gap-2.5 px-6 text-white/35 transition-colors hover:text-white/70"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="font-display text-lg font-medium">{s.title}</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
