import { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import NavBar from "./NavBar";
import { cn } from "../../lib/cn";
import headshot from "../../assets/pictures/headshot.jpg";
import resume from "../../assets/resume/Muhammad-Harris-Malik-Resume.pdf";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-20 items-center">
      <div className="header-blur-bg" />
      <div
        className={cn(
          "absolute inset-0 border-b transition-all duration-500",
          scrolled
            ? "border-white/10 bg-ink/50 backdrop-blur-xl"
            : "border-transparent",
        )}
      />

      <div className="container relative z-10 flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Logo + name */}
        <a href="#home" className="group flex items-center gap-3 justify-self-start">
          <img
            src={headshot}
            alt="Harris Malik"
            width={38}
            height={38}
            className="h-9 w-9 rounded-full object-cover ring-2 ring-white/15 transition-all duration-200 group-hover:ring-accent/60"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-white">Harris Malik</span>
            <span className="font-mono text-[11px] tracking-wide text-white/45">
              AI Product Engineer
            </span>
          </span>
        </a>

        {/* Nav (center on desktop, dropdown on mobile) */}
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((x) => !x)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <NavBar isActive={navOpen} onNavigate={() => setNavOpen(false)} />
        </div>

        {/* CTAs */}
        <div className="hidden items-center gap-2 justify-self-end md:flex">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost h-10 px-4"
          >
            Résumé
          </a>
          <a href="#contact" className="btn btn-primary h-10 px-4">
            Start a project
            <IoArrowForward />
          </a>
        </div>
      </div>
    </header>
  );
}
