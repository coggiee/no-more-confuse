import { Boundary } from "@/components/Boundary";
import NestedDependentUseQuery from "@/components/use-query/nested-dependent-use-query";
import NestedUseQuery from "@/components/use-query/nested-use-query";
import SingleUseQuery from "@/components/use-query/single-use-query";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="space-y-10">
        <h1 className="font-black font-geistsans text-2xl">
          within Single Component
        </h1>
        <div className="flex flex-col gap-3">
          <Boundary
            labels={["useQuery + useQuery"]}
            size="small"
            width="default"
          >
            <SingleUseQuery />
          </Boundary>
          <div>
            하나의 컴포넌트 내에서 useQuery를 여러 개 사용할 경우, 병렬로
            처리된다.
          </div>
        </div>
      </div>
      <div className="space-y-10 pt-10">
        <h1 className="font-black font-geistsans text-2xl">
          within Nested Component
        </h1>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold font-geistsans text-xl">Dependent Query</h2>
          <Boundary
            labels={["Dependent useQuery"]}
            size="small"
            width="default"
          >
            <NestedDependentUseQuery />
          </Boundary>
          <div>
            자식 컴포넌트가 부모 컴포넌트의 쿼리 데이터에 의존한다면, 두 쿼리는
            순서대로 처리된다.
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold font-geistsans text-xl">
            Non-Dependent Query
          </h2>
          <Boundary
            labels={["Non-Dependent useQuery"]}
            size="small"
            width="default"
          >
            <NestedUseQuery />
          </Boundary>
          <article className="text-wrap">
            <p>
              중첩 컴포넌트 구조여도, 자식 컴포넌트의 쿼리가 부모 컴포넌트의
              쿼리 데이터에 의존하지 않는다면, 두 쿼리는 병렬로 처리된다.
            </p>
            <p>
              즉, 하나의 컴포넌트에서 여러 개의 useQuery를 사용하는 것과
              동일하다.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
