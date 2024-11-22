import { Article } from "@/components/article";
import { Boundary } from "@/components/boundary";
import SingleUseSuspenseQuery from "@/components/use-suspense-query/single-use-suspense-query";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Article>
      <Article.Body>
        <Article.Title>within Single Component</Article.Title>
        <Article.Content>
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
          <Article.Description>
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
          </Article.Description>
        </Article.Content>
      </Article.Body>
    </Article>
  );
}
