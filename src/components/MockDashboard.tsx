"use client";

export function MockDashboard({ variant = "main" }: { variant?: "main" | "report" | "mobile" }) {
  if (variant === "mobile") {
    return (
      <div className="relative w-full h-full bg-midnight rounded-lg overflow-hidden border border-white/10 p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="w-6 h-6 rounded-full bg-gold/20 border border-gold/40" />
          <div className="h-1.5 w-16 bg-white/10 rounded-full" />
        </div>
        <div className="space-y-2 mb-3">
          <div className="h-2 w-full bg-gold/30 rounded-full" />
          <div className="h-2 w-3/4 bg-white/10 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["12", "3", "68%", "2d"].map((v, i) => (
            <div key={i} className="bg-sapphire/60 rounded p-2 border border-white/5">
              <p className="text-[8px] text-steel uppercase tracking-wider">Metric</p>
              <p className="text-sm font-display text-gold">{v}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-around mt-3 pt-2 border-t border-white/5">
          {["Home", "Scan", "Report"].map((t) => (
            <span key={t} className="text-[7px] text-steel/60 uppercase">{t}</span>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "report") {
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-sapphire-dark/90 to-midnight rounded-lg overflow-hidden border border-white/10 p-4">
        <div className="h-1 w-12 bg-gold/60 rounded mb-3" />
        <div className="h-2 w-2/3 bg-white/20 rounded mb-4" />
        <div className="space-y-2">
          {[85, 62, 45, 30].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gold/40 rounded-full" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
          <span className="text-[8px] text-gold">PDF</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-midnight/90 rounded-lg overflow-hidden border border-white/10 flex">
      <div className="w-12 bg-nearblack/80 border-r border-white/5 p-2 space-y-3 hidden sm:block">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-6 rounded ${i === 1 ? "bg-gold/30" : "bg-white/5"}`} />
        ))}
      </div>
      <div className="flex-1 p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="h-2 w-24 bg-white/20 rounded mb-1.5" />
            <div className="h-1.5 w-16 bg-white/10 rounded" />
          </div>
          <div className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
          {[
            { label: "Exposure", val: "HIGH", color: "text-red-400/80" },
            { label: "Profiles", val: "47", color: "text-gold" },
            { label: "Protected", val: "120d", color: "text-emerald-400/80" },
          ].map((m) => (
            <div key={m.label} className="bg-sapphire/50 rounded-lg p-2 sm:p-3 border border-white/5">
              <p className="text-[8px] sm:text-[9px] text-steel uppercase tracking-wider">{m.label}</p>
              <p className={`text-sm sm:text-base font-display ${m.color}`}>{m.val}</p>
            </div>
          ))}
        </div>
        <div className="h-16 sm:h-20 bg-sapphire/30 rounded-lg border border-white/5 flex items-end gap-1 p-2 sm:p-3">
          {[40, 65, 45, 80, 55, 70, 50, 85, 60, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-gold/20 to-gold/60 rounded-t-sm"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
