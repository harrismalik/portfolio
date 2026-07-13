import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type TimelineEntry = {
  title: string;
  content: ReactNode;
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 38%", "end 55%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div ref={containerRef} className="container">
      <div ref={ref} className="relative mx-auto max-w-5xl pb-10">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-28">
            <div className="sticky top-32 z-30 flex max-w-xs flex-col items-start self-start md:w-52 md:flex-row lg:max-w-sm">
              <div className="absolute -left-[3px] hidden h-7 w-7 items-center justify-center rounded-full bg-ink-100 ring-1 ring-white/10 md:left-1 md:flex">
                <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              </div>
              <h3 className="hidden font-display text-3xl font-bold text-white/20 md:block md:pl-16 md:text-4xl lg:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-0 md:pl-4">{item.content}</div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-2 top-0 hidden w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-white/10 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)] md:block"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-accent via-emerald-400 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
