import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { useLenis } from "lenis/react";
import { cn } from "../../lib/cn";

type NavItem = { name: string; id: string };

const NAV_ITEMS: NavItem[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

type NavBarProps = {
  isActive: boolean;
  onNavigate?: () => void;
};

export default function NavBar({ isActive, onNavigate }: NavBarProps) {
  const lenis = useLenis();
  const [activeId, setActiveId] = useState<string>("home");
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const boxRef = useRef<HTMLDivElement>(null);

  const positionBox = () => {
    const el = linkRefs.current[activeId];
    const box = boxRef.current;
    if (!el || !box) return;
    box.style.top = `${el.offsetTop}px`;
    box.style.left = `${el.offsetLeft}px`;
    box.style.width = `${el.offsetWidth}px`;
    box.style.height = `${el.offsetHeight}px`;
  };

  useEffect(positionBox, [activeId, isActive]);

  useEffect(() => {
    window.addEventListener("resize", positionBox);
    return () => window.removeEventListener("resize", positionBox);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  // Scroll-spy: highlight the section currently in the viewport band.
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (s): s is HTMLElement => s !== null,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      if (lenis) lenis.scrollTo(el, { offset: -80 });
      else el.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate?.();
  };

  return (
    <nav className={cn("nav-bar", isActive && "active")}>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          ref={(el) => {
            linkRefs.current[item.id] = el;
          }}
          onClick={(e) => handleClick(e, item.id)}
          className={cn("nav-link", activeId === item.id && "active")}
        >
          {item.name}
        </a>
      ))}
      <div className="active-box" ref={boxRef} />
    </nav>
  );
}
