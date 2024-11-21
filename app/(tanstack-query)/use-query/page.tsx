import { Boundary } from "@/components/Boundary";
import NestedDependentUseQuery from "@/components/use-query/nested-dependent-use-query";
import NestedUseQuery from "@/components/use-query/nested-use-query";
import SingleUseQuery from "@/components/use-query/single-use-query";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="space-y-10">
        <header>
          <h1 className="font-black font-geistsans text-2xl">
            within Single Component
          </h1>
        </header>
        <article className="space-y-5">
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary
              labels={["useQuery + useQuery"]}
              size="small"
            >
              <SingleUseQuery />
            </Boundary>
          </div>
          <div>
            하나의 컴포넌트 내에서 useQuery를 여러 개 사용할 경우, 병렬로
            처리된다.
          </div>
        </article>
      </div>
      <div className="space-y-10 pt-10">
        <header>
          <h1 className="font-black font-geistsans text-2xl">
            within Nested Component
          </h1>
        </header>
        <article className="space-y-5">
          <h2 className="font-bold font-geistsans text-xl">Dependent Query</h2>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary
              labels={["Dependent useQuery"]}
              size="small"
            >
              <NestedDependentUseQuery />
            </Boundary>
          </div>
          <div>
            자식 컴포넌트가 부모 컴포넌트의 쿼리 데이터에 의존한다면, 두 쿼리는
            순서대로 처리된다.
          </div>
        </article>
        <article className="space-y-5">
          <h2 className="font-bold font-geistsans text-xl">
            Non-Dependent Query
          </h2>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary
              labels={["Non-Dependent useQuery"]}
              size="small"
            >
              <NestedUseQuery />
            </Boundary>
          </div>
          <div>
            <p>
              중첩 컴포넌트 구조여도, 자식 컴포넌트의 쿼리가 부모 컴포넌트의
              쿼리 데이터에 의존하지 않는다면, 두 쿼리는 병렬로 처리된다.
            </p>
            <p>
              즉, 하나의 컴포넌트에서 여러 개의 useQuery를 사용하는 것과
              동일하다.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
