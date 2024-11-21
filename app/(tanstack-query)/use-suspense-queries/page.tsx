import { Boundary } from "@/components/Boundary";
import SingleUseSuspenseQueries from "@/components/single-use-suspense-queries";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <div className="space-y-10">
        <header>
          <h1 className="font-black font-geistsans text-2xl">
            within Single Component
          </h1>
        </header>
        <article className="space-y-5">
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Suspense fallback={<>Loading...</>}>
              <Boundary labels={["useSuspenseQueries"]} size="small">
                <SingleUseSuspenseQueries />
              </Boundary>
            </Suspense>
          </div>
          <div>
            <p>
              useSuspenseQueries는 queries에 여러 개의 쿼리를 하나의 배열로
              묶어서 전달한다.
            </p>
            <p>
              여러 개의 useSuspenseQuery를 사용할 떄와 다르게, 각 쿼리가 병렬로
              처리된다.
            </p>
            <p>
              여러 개의 useSuspenseQuery를 사용해야 한다면, useSuspenseQueries를
              사용하는게 성능면에서 좋다. (단, 각 쿼리가 서로 독립적이어야
              한다.)
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}