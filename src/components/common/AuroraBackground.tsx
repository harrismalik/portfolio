import { cn } from "../../lib/cn";

/** Global fixed backdrop: deep ink base, drifting aurora blobs, dotted grid, grain. */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink grain",
        className,
      )}
    >
      {/* dotted grid, fading toward the bottom */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />

      {/* aurora blobs */}
      <div
        className="absolute -left-40 -top-48 h-[46rem] w-[46rem] rounded-full opacity-30 blur-[130px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle at center, rgba(52,211,153,0.55), transparent 62%)",
        }}
      />
      <div
        className="absolute right-[-14rem] top-[26%] h-[42rem] w-[42rem] rounded-full opacity-25 blur-[140px] animate-aurora2"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.45), transparent 62%)",
        }}
      />
      <div
        className="absolute bottom-[-14rem] left-1/4 h-[40rem] w-[40rem] rounded-full opacity-20 blur-[140px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle at center, rgba(167,139,250,0.5), transparent 62%)",
        }}
      />

      {/* subtle top light + bottom fade into pure ink */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.04] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
