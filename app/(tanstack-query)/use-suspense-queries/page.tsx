import { Article } from "@/components/article";
import { Boundary } from "@/components/boundary";
import SingleUseSuspenseQueries from "@/components/use-suspense-query/single-use-suspense-queries";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Article>
      <Article.Body>
        <Article.Title>within Single Component</Article.Title>
        <Article.Content>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Suspense fallback={<>Loading...</>}>
              <Boundary labels={["useSuspenseQueries"]} size="small">
                <SingleUseSuspenseQueries />
              </Boundary>
            </Suspense>
          </div>
          <Article.Description>
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
          </Article.Description>
        </Article.Content>
      </Article.Body>
    </Article>
  );
}
