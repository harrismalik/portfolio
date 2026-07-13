import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Shared section heading: mono eyebrow + display title + optional lede. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={cn(
          "mt-4 font-display font-semibold tracking-tight text-gradient",
          "text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl leading-relaxed text-white/55",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
