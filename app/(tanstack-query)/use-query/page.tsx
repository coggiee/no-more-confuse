import { Article } from "@/components/article";
import { Boundary } from "@/components/boundary";
import NestedDependentUseQuery from "@/components/use-query/nested-dependent-use-query";
import NestedUseQuery from "@/components/use-query/nested-use-query";
import SingleUseQuery from "@/components/use-query/single-use-query";
import React from "react";

export default function Page() {
  return (
    <Article>
      <Article.Body>
        <Article.Title>within Single Component</Article.Title>
        <Article.Content>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["useQuery + useQuery"]} size="small">
              <SingleUseQuery />
            </Boundary>
          </div>
          <Article.Description>
            하나의 컴포넌트 내에서 useQuery를 여러 개 사용할 경우, 병렬로
            처리된다.
          </Article.Description>
        </Article.Content>
      </Article.Body>
      <Article.Body className="pt-10">
        <Article.Title>within Nested Component</Article.Title>
        <Article.Content>
          <Article.Subtitle>Dependent Query</Article.Subtitle>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["Dependent useQuery"]} size="small">
              <NestedDependentUseQuery />
            </Boundary>
          </div>
          <Article.Description>
            자식 컴포넌트가 부모 컴포넌트의 쿼리 데이터에 의존한다면, 두 쿼리는
            순서대로 처리된다.
          </Article.Description>
        </Article.Content>
        <Article.Content>
          <Article.Subtitle>Non-Dependent Query</Article.Subtitle>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["Non-Dependent useQuery"]} size="small">
              <NestedUseQuery />
            </Boundary>
          </div>
          <Article.Description>
            <p>
              중첩 컴포넌트 구조여도, 자식 컴포넌트의 쿼리가 부모 컴포넌트의
              쿼리 데이터에 의존하지 않는다면, 두 쿼리는 병렬로 처리된다.
            </p>
            <p>
              즉, 하나의 컴포넌트에서 여러 개의 useQuery를 사용하는 것과
              동일하다.
            </p>
          </Article.Description>
        </Article.Content>
      </Article.Body>
    </Article>
  );
}
