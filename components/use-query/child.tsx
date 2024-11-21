import { useTrackedQuery } from "@/hooks/useTrackedQuery";
import React, { useEffect } from "react";
import Time from "../time";
import { Timing } from "@/types/timingType";

export default function Child({
  postId,
  onFetch,
}: {
  postId?: string;
  onFetch?: (timing: Timing) => void;
}) {
  const { data } = useTrackedQuery({
    key: postId ? postId : "child",
    endPoint: `https://jsonplaceholder.typicode.com/comments`,
  });

  useEffect(() => {
    if (data && data.timing && onFetch) onFetch(data?.timing);
  }, [data, onFetch]);

  return (
    <div>{data?.timing && <Time title="Child" timing={data.timing} />}</div>
  );
}
