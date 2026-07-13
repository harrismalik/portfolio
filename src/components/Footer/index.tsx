import { IoArrowForwardCircle } from "react-icons/io5";
import { HiArrowUp } from "react-icons/hi2";
import { Magnetic } from "../common/Magnetic";
import { Reveal } from "../common/Reveal";

type FooterLink = { name: string; href: string; external?: boolean };

const navLinks: FooterLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const socialLinks: FooterLink[] = [
  { name: "GitHub", href: "https://github.com/harrismalik", external: true },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mharrismalik",
    external: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mharrismalik/",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pb-10 pt-20">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="max-w-[14ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tight text-gradient">
                Let's build something great.
              </h2>
              <div className="mt-8">
                <Magnetic strength={0.3}>
                  <a
                    href="mailto:contact@mharrismalik.com"
                    className="btn btn-primary text-[15px]"
                  >
                    contact@mharrismalik.com
                    <IoArrowForwardCircle className="text-lg" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 lg:justify-items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Connect
              </p>
              <ul className="space-y-2.5">
                {socialLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; 2025{" "}
            <span className="text-white/70">Muhammad Harris Malik</span>
          </p>
          <p className="font-mono text-xs text-white/30">
            Designed &amp; built with care.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
          >
            Back to top
            <HiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
