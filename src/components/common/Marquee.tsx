import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  /** Seconds for one full loop. */
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
};

/** Seamless infinite horizontal marquee with edge fade. */
export function Marquee({
  children,
  reverse = false,
  speed = 40,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const track = cn(
    "flex w-max shrink-0 animate-marquee",
    pauseOnHover && "group-hover:[animation-play-state:paused]",
  );

  return (
    <div className={cn("group relative flex overflow-hidden mask-fade-x", className)}>
      <div
        className={track}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center gap-6 pr-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
