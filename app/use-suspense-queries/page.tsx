import { Boundary } from "@/components/Boundary";
import MultipleSuspenseWaterfallChart from "@/components/MultipleSuspenseWaterfallChart";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <div className="space-y-10">
        <h1 className="font-black font-geistsans text-2xl">
          within Single Component
        </h1>
        <div>
          <Suspense fallback={<>Loading...</>}>
            <Boundary labels={["useSuspenseQueries"]} size="small" width="fit">
              <MultipleSuspenseWaterfallChart />
            </Boundary>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
