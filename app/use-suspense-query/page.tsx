import { Boundary } from "@/components/Boundary";
import SuspenseWaterfallChart from "@/components/SuspenseWaterfallChart";
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
            <Boundary
              labels={["useSuspenseQuery + useSuspenseQuery"]}
              size="small"
              width="fit"
            >
              <SuspenseWaterfallChart />
            </Boundary>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
