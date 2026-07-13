import { GoArrowUpRight } from "react-icons/go";
import { FaSquareGithub } from "react-icons/fa6";
import animatingUIImage from "../../assets/projects/portfolio_design_animation.png";
import pixelArtCanvasImage from "../../assets/projects/pixel_art_canvas.png";
import { SectionHeader } from "../common/SectionHeader";
import { Reveal } from "../common/Reveal";

type Project = {
  index: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
};

const projects: Project[] = [
  {
    index: "01",
    image: pixelArtCanvasImage,
    title: "Pixel Art Canvas",
    description:
      "A performant, browser-based pixel-art editor with layered canvas rendering, smooth zoom, and instant export.",
    tags: ["Next.js", "React", "Zustand", "Tailwind", "Canvas"],
    projectLink: "https://pixelartcanvas.vercel.app/",
  },
  {
    index: "02",
    image: animatingUIImage,
    title: "Portfolio v1 — Motion Study",
    description:
      "A GSAP-driven animated portfolio exploring scroll-linked motion and playful, tactile micro-interactions.",
    tags: ["GSAP", "Animation", "React", "UI"],
    projectLink: "https://mharrismalik-depricated.vercel.app/",
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title="Things I've built"
          description="A few products and experiments — from AI-driven tools to motion-rich interfaces."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href={p.projectLink}
                target="_blank"
                rel="noreferrer"
                className="panel panel-hover group block h-full overflow-hidden"
              >
                <figure className="img-box relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="img-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <span className="absolute right-4 top-4 grid h-10 w-10 -translate-y-1 place-items-center rounded-full bg-ink/60 text-white opacity-0 ring-1 ring-white/15 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <GoArrowUpRight />
                  </span>
                </figure>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <span className="font-mono text-xs text-white/35">
                      {p.index}
                    </span>
                  </div>
                  <p className="mt-2.5 max-w-[48ch] text-sm leading-relaxed text-white/55">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href="https://github.com/harrismalik"
            target="_blank"
            rel="noreferrer"
            className="panel panel-hover group mt-4 flex items-center justify-between gap-4 p-6"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-2xl text-white/80 transition-colors group-hover:text-accent">
                <FaSquareGithub />
              </span>
              <div>
                <p className="font-display font-semibold text-white">
                  More on GitHub
                </p>
                <p className="text-sm text-white/50">
                  Open-source experiments and works in progress.
                </p>
              </div>
            </div>
            <GoArrowUpRight className="text-xl text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
