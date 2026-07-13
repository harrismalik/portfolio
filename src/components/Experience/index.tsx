import { MdArrowOutward } from "react-icons/md";
import { Timeline } from "./timeline";
import { SectionHeader } from "../common/SectionHeader";

type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

type Experience = {
  timeString: string;
  description: string;
  tools: string[];
  company: { link: string; name: string };
};

const experiences: Experience[] = [
  {
    timeString: "2024 — Present",
    company: { link: "https://vconekt.com/", name: "Vconekt" },
    description:
      "Leading development of SaaS applications with AI-powered features. Shipped production AI Voice Agents handling 200+ daily conversations with sub-500ms latency. Architected omnichannel workflow automation automating 60% of customer inquiries.",
    tools: ["React", "Next.js", "Python", "LangChain", "VAPI", "Node.js"],
  },
  {
    timeString: "2023 — 2024",
    company: { link: "https://www.asfargroup.ae/", name: "Asfar Group" },
    description:
      "Built multiple web applications with performant frontends and scalable backends. Led ERP platform development for travel and tourism, enhancing operational workflows and delivering customized cross-department solutions.",
    tools: ["TypeScript", "Next.js", "React", "Laravel", "Node.js"],
  },
  {
    timeString: "2021 — 2023",
    company: {
      link: "https://uforiainfotech.com/",
      name: "Uforia Infotech · Glorify",
    },
    description:
      "Developed complex canvas features for Glorify, an award-winning SaaS tool (P@SHA ICT Award 2022 Gold, Product Hunt Featured) later acquired by Leadpages. Built API-driven applications serving 100,000+ monthly active users.",
    tools: ["TypeScript", "Fabric.js", "React", "Redux-Saga", "Node.js"],
  },
  {
    timeString: "2020 — 2021",
    company: { link: "https://atoptimize.com/", name: "AtOptimize" },
    description:
      "Designed and implemented web applications for ecommerce businesses. Built dynamic web pages enhancing user experience and operational efficiency.",
    tools: ["PHP", "Laravel", "WordPress", "JavaScript", "MySQL"],
  },
];

function buildTimeline(items: Experience[]): TimelineEntry[] {
  return items.map((item) => ({
    title: item.timeString,
    content: (
      <div className="container md:p-0">
        <div className="panel panel-hover p-7 md:p-9">
          <h3 className="mb-4 block font-display text-xl font-semibold text-white/45 md:hidden">
            {item.timeString}
          </h3>
          <a
            href={item.company.link}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-display text-lg font-semibold text-white transition-colors hover:text-accent"
          >
            {item.company.name}
            <MdArrowOutward className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </a>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-white/60">
            {item.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <span key={tool} className="chip">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  }));
}

export default function Experience() {
  const data = buildTimeline(experiences);

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Career"
          title="Where I've made an impact"
          description="Five years across startups and award-winning products — building, leading, and shipping."
        />
      </div>
      <div className="mt-6">
        <Timeline data={data} />
      </div>
    </section>
  );
}
