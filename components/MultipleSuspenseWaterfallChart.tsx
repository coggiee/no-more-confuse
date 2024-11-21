"use client";

import React from "react";
import { useTrackedSuspenseQueries } from "@/hooks/useTrackedSuspenseQuery";
import TimeChart from "./TimeChart";
import Time from "./Time";

const queries = [
  {
    key: "sample7",
    endPoint: "https://jsonplaceholder.typicode.com/users/1",
  },
  {
    key: "sample8",
    endPoint: "https://jsonplaceholder.typicode.com/users/2",
  },
];

export default function MultipleSuspenseWaterfallChart() {
  const trackedQueries = useTrackedSuspenseQueries(queries);

  const transformedTrackedData = React.useMemo(() => {
    return trackedQueries
      .map((query, index) => {
        if (query.data?.timing) {
          return {
            name: `Request ${index + 1}`,
            startTime: query.data.timing.startTime,
            endTime: query.data.timing.endTime,
            duration: query.data.timing.duration,
          };
        }
        return null;
      })
      .filter(Boolean); // null 값 제거
  }, [trackedQueries]);
  console.log(transformedTrackedData);
  return (
    <div className="w-[800px]">
      {transformedTrackedData.length > 0 && (
        <>
          <TimeChart data={transformedTrackedData} />
          {transformedTrackedData[0] && transformedTrackedData[1] && (
            <div className="flex items-center gap-5">
              <Time
                title="Request 1"
                timing={{
                  startTime: transformedTrackedData[0].startTime,
                  endTime: transformedTrackedData[0].endTime,
                  duration: transformedTrackedData[0].duration,
                }}
              />
              <Time
                title="Request 2"
                timing={{
                  startTime: transformedTrackedData[1].startTime,
                  endTime: transformedTrackedData[1].endTime,
                  duration: transformedTrackedData[1].duration,
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
