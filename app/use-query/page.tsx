import { Boundary } from "@/components/Boundary";
import WaterfallChart from "@/components/WaterfallChart";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="space-y-10">
        <h1 className="font-black font-geistsans text-2xl">
          within Single Component
        </h1>
        <div>
          <Boundary labels={["useQuery + useQuery"]} size="small" width="fit">
            <WaterfallChart />
          </Boundary>
        </div>
      </div>
    </div>
  );
}
