import { Boundary } from "@/components/Boundary";
import SingleUseSuspenseQueries from "@/components/single-use-suspense-queries";
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
            <Boundary labels={["useSuspenseQueries"]} size="small" width="fit">
              <SingleUseSuspenseQueries />
            </Boundary>
            <div>
              <p>
                useSuspenseQueries는 queries에 여러 개의 쿼리를 하나의 배열로
                묶어서 전달한다.
              </p>
              <p>
                여러 개의 useSuspenseQuery를 사용할 떄와 다르게, 각 쿼리가
                병렬로 처리된다.
              </p>
              <p>
                여러 개의 useSuspenseQuery를 사용해야 한다면,
                useSuspenseQueries를 사용하는게 성능면에서 좋다. (단, 각 쿼리가
                서로 독립적이어야 한다.)
              </p>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
