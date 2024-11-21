import { Boundary } from "@/components/Boundary";
import SingleUseQueries from "@/components/single-use-queries";
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
            <SingleUseQueries />
          </Boundary>
        </div>
      </div>
    </div>
  );
}
