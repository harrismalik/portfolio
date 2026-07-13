import { Reveal } from "../common/Reveal";
import { AnimatedNumber } from "../common/AnimatedNumber";

type Metric = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
};

const metrics: Metric[] = [
  { value: 5, suffix: "+", label: "Years building products" },
  { value: 100, suffix: "K+", label: "Users impacted" },
  { value: 200, suffix: "+", label: "Daily AI conversations" },
  { value: 60, suffix: "%", label: "Inquiries automated" },
];

export default function Metrics() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="panel grain relative overflow-hidden p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

            <p className="relative text-center font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
              By the numbers
            </p>

            <div className="relative mt-8 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/10">
              {metrics.map((m) => (
                <div key={m.label} className="px-2 text-center md:px-4">
                  <p className="font-display text-[clamp(2.75rem,6vw,4rem)] font-semibold leading-none">
                    <AnimatedNumber
                      className="text-aurora"
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                    />
                  </p>
                  <p className="mt-3 text-sm text-white/50">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
