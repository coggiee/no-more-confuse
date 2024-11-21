import { Boundary } from "@/components/boundary";
import SingleUseQueries from "@/components/use-query/single-use-queries";
import React from "react";

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
            <Boundary labels={["useQueries"]} size="small" width="default">
              <SingleUseQueries />
            </Boundary>
          </div>
          <div>
            <p>
              useQueries는 queries에 여러 개의 쿼리를 하나의 배열로 묶어서
              전달한다.
            </p>
            <p>
              useQuery를 여러 개 호출한 것과 동일하게 모든 쿼리가 병렬로
              처리된다.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
