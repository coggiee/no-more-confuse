import { Boundary } from "@/components/Boundary";
import MultipleWaterfallChart from "@/components/MutlipleWaterfallChart";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="space-y-10">
        <h1 className="font-black font-geistsans text-2xl">
          within Single Component
        </h1>
        <div>
          <Boundary labels={["useQueries"]} size="small" width="fit">
            <MultipleWaterfallChart />
          </Boundary>
        </div>
      </div>
    </div>
  );
}
