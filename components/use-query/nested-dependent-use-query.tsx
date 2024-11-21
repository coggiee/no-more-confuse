"use client";

import { useTrackedQuery } from "@/hooks/useTrackedQuery";
import React, { useCallback, useState } from "react";
import Child from "./child";
import Time from "../Time";
import { Timing } from "@/types/timingType";
import TimeChart from "../TimeChart";

export default function NestedDependentUseQuery() {
  const [result, setResult] = useState<any>(null);

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
        });
      }

      if (timing) {
        result.push({
          name: "Child",
          startTime: timing.startTime,
          endTime: timing.endTime,
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
          <Child postId={data.data.id} onFetch={handleChildTiming} />
        </div>
      )}
    </div>
  );
}
