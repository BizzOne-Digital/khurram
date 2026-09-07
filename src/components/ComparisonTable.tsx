"use client";

import { Check, X } from "lucide-react";
import { comparisonRows } from "@/data/pricing";
import { SectionReveal } from "./SectionReveal";

export function ComparisonTable() {
  return (
    <SectionReveal>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gold/20">
              <th className="text-left py-4 px-4 label-caps text-gold">Feature</th>
              <th className="text-center py-4 px-4 label-caps text-gold">
                Executive Audit
              </th>
              <th className="text-center py-4 px-4 label-caps text-gold">
                Active Protection
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature} className="border-b border-white/5">
                <td className="py-4 px-4 text-sm text-ivory">{row.feature}</td>
                <td className="py-4 px-4 text-center">
                  <CellValue value={row.audit} />
                </td>
                <td className="py-4 px-4 text-center">
                  <CellValue value={row.retainer} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {comparisonRows.map((row) => (
          <div key={row.feature} className="glass-panel rounded-lg p-4">
            <p className="label-caps text-gold mb-3">{row.feature}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-steel text-xs mb-1">Audit</p>
                <CellValue value={row.audit} />
              </div>
              <div>
                <p className="text-steel text-xs mb-1">Retainer</p>
                <CellValue value={row.retainer} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-gold mx-auto" aria-label="Included" />
    ) : (
      <X className="w-5 h-5 text-steel/40 mx-auto" aria-label="Not included" />
    );
  }
  return <span className="text-sm text-ivory">{value}</span>;
}
