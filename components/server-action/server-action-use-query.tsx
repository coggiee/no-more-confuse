"use client";

import { useTrackedServerQuery } from "@/hooks/useTrackedQuery";
import React from "react";
import TimeChart from "../TimeChart";
import Time from "../Time";

export default function ServerActionUseQuery() {
  const { data } = useTrackedServerQuery({
    key: "serverAction",
    endPoint: "https://jsonplaceholder.typicode.com/posts",
  });

  const { data: data2 } = useTrackedServerQuery({
    key: "serverAction2",
    endPoint: "https://jsonplaceholder.typicode.com/posts",
  });

  const timing = data?.timing;
  const timing2 = data2?.timing;

  const transformedData = React.useMemo(() => {
    const result = [];

    if (timing) {
      result.push({
        name: "Request 1",
        startTime: timing.startTime,
        endTime: timing.endTime,
      });
    }

    if (timing2) {
      result.push({
        name: "Request 2",
        startTime: timing2.startTime,
        endTime: timing2.endTime,
      });
    }

    return result;
  }, [timing, timing2]);

  return (
    <div>
      {timing && timing2 && (
        <>
          <TimeChart data={transformedData} />
          <div className="flex items-center gap-5">
            <Time title="Request 1" timing={timing} />
            <Time title="Request 2" timing={timing2} />
          </div>
        </>
      )}
    </div>
  );
}
