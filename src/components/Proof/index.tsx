import { BsTrophyFill, BsPatchCheckFill, BsPeopleFill } from "react-icons/bs";
import { SiProducthunt } from "react-icons/si";
import { Marquee } from "../common/Marquee";
import { Reveal } from "../common/Reveal";

const companies = [
  "Vconekt",
  "Asfar Group",
  "Glorify",
  "Uforia Infotech",
  "AtOptimize",
];

const awards = [
  { icon: <BsTrophyFill />, label: "P@SHA ICT 2022 — Gold" },
  { icon: <SiProducthunt />, label: "Product Hunt — Featured" },
  { icon: <BsPatchCheckFill />, label: "Glorify → Acquired by Leadpages" },
  { icon: <BsPeopleFill />, label: "100K+ users served" },
];

export default function Proof() {
  return (
    <section className="relative border-y border-white/[0.06] py-12 md:py-16">
      <div className="container">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            Five years of shipping across
          </p>
        </Reveal>

        <div className="mt-8">
          <Marquee speed={32}>
            {companies.map((name) => (
              <span
                key={name}
                className="select-none px-8 font-display text-2xl font-semibold text-white/30 transition-colors duration-300 hover:text-white/70 sm:text-3xl"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {awards.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/70 transition-colors hover:border-accent/30 hover:text-white"
              >
                <span className="text-accent">{a.icon}</span>
                {a.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
