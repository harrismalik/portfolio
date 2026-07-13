import { BsStars } from "react-icons/bs";
import { Reveal } from "../common/Reveal";
import { AnimatedNumber } from "../common/AnimatedNumber";
import profileImg from "../../assets/profile-img.jpg";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Story */}
          <Reveal className="md:col-span-2">
            <div className="panel flex h-full flex-col justify-center p-8 md:p-10">
              <span className="eyebrow">About</span>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-gradient">
                From idea to production.
              </h2>
              <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-white/65 md:text-lg">
                I help businesses turn complex ideas into working products.
                Whether you need an AI-powered automation system, a Voice AI
                agent, or a complete SaaS platform, I handle everything from
                architecture to deployment.
              </p>
              <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/50">
                My work has powered award-winning products and served hundreds of
                thousands of users — shipped, not just prototyped.
              </p>
              <div className="mt-7 inline-flex w-max items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Currently building AI products at{" "}
                <span className="font-medium text-white">Vconekt</span>
              </div>
            </div>
          </Reveal>

          {/* Portrait */}
          <Reveal delay={0.08}>
            <div className="panel group relative h-full min-h-[300px] overflow-hidden">
              <img
                src={profileImg}
                alt="Muhammad Harris Malik"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="font-display text-lg font-semibold text-white">
                  Muhammad Harris Malik
                </p>
                <p className="font-mono text-xs tracking-wide text-white/60">
                  Full-Stack &amp; AI Engineer
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stat: years */}
          <Reveal delay={0.12}>
            <div className="panel panel-hover flex h-full flex-col justify-between p-7">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Experience
              </span>
              <p className="mt-6 font-display text-5xl font-semibold text-white">
                <AnimatedNumber value={5} suffix="+" />
              </p>
              <p className="mt-1 text-sm text-white/50">years building products</p>
            </div>
          </Reveal>

          {/* Stat: users */}
          <Reveal delay={0.16}>
            <div className="panel panel-hover flex h-full flex-col justify-between p-7">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Reach
              </span>
              <p className="mt-6 font-display text-5xl font-semibold text-accent">
                <AnimatedNumber value={100} suffix="K+" />
              </p>
              <p className="mt-1 text-sm text-white/50">users impacted</p>
            </div>
          </Reveal>

          {/* Qualitative */}
          <Reveal delay={0.2}>
            <div className="panel panel-hover flex h-full flex-col justify-between p-7">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <BsStars />
              </span>
              <p className="mt-6 font-display text-xl font-semibold leading-snug text-white">
                AI-first, product-minded.
              </p>
              <p className="mt-1 text-sm text-white/50">
                Outcomes over output — every time.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
