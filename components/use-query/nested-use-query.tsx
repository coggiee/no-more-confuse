"use client";

import { useTrackedQuery } from "@/hooks/useTrackedQuery";
import React, { useCallback, useState } from "react";
import Child from "./child";
import Time from "../Time";
import { Timing } from "@/types/timingType";
import TimeChart from "../TimeChart";

export default function NestedUseQuery() {
  const [result, setResult] = useState<Timing[] | null>(null);

  const { data } = useTrackedQuery({
    key: "parent",
    endPoint: "https://jsonplaceholder.typicode.com/posts/1",
  });

  const handleChildTiming = useCallback(
    (timing: Timing) => {
      const result = [];

      if (data?.timing) {
        result.push({
          name: "Parent",
          startTime: data.timing.startTime,
          endTime: data.timing.endTime,
          duration: data.timing.duration,
        });
      }

      if (timing) {
        result.push({
          name: "Child",
          startTime: timing.startTime,
          endTime: timing.endTime,
          duration: timing.duration,
        });
      }

      setResult(result);
    },
    [data?.timing]
  );

  return (
    <div>
      {result && <TimeChart data={result} />}
      {data && data?.timing && (
        <div className="flex items-center gap-5">
          <Time title="Parent" timing={data.timing} />
        </div>
      )}
      <Child onFetch={handleChildTiming} />
    </div>
  );
}
