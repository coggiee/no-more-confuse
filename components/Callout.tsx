import React from "react";

export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 h-fit rounded-xl shadow-sm border border-slate-200 p-5 text-sm text-wrap font-semibold">
      {children}
    </div>
  );
}
