import { Boundary } from "@/components/Boundary";
import SingleUseQuery from "@/components/single-use-query";
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
            <SingleUseQuery />
          </Boundary>
        </div>
      </div>
    </div>
  );
}
