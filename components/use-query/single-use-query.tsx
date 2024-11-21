"use client";

import { useTrackedQuery } from "@/hooks/useTrackedQuery";
import React from "react";
import TimeChart from "../TimeChart";
import Time from "../Time";

export default function SingleUseQuery() {
  const { data } = useTrackedQuery({
    key: "sample1",
    endPoint: "https://jsonplaceholder.typicode.com/users",
  });

  const { data: data2 } = useTrackedQuery({
    key: "sample2",
    endPoint: "https://jsonplaceholder.typicode.com/users",
  });

  const timing = data?.timing;
  const timing2 = data2?.timing;

  // timing 데이터를 Example 컴포넌트의 형식에 맞게 변환
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
