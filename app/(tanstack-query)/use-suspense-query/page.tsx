import { Boundary } from "@/components/Boundary";
import SingleUseSuspenseQuery from "@/components/single-use-suspense-query";
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
              <Boundary
                labels={["useSuspenseQuery + useSuspenseQuery"]}
                size="small"
                width="default"
              >
                <SingleUseSuspenseQuery />
              </Boundary>
            </Suspense>
          </div>
          <div>
            <p>
              useSuspenseQuery는 작업이 완료될 때 까지 다음 작업을 수행하지
              않는다.
            </p>
            <p>
              즉, 하나의 컴포넌트 내에서, useSuspenseQuery를 여러 개 사용할 경우
              순서대로 처리된다.
            </p>
            <p>
              그렇기 때문에, 잘못 사용하면 waterfall이 깊어질 수 있어 성능이
              저하될 수 있다.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
