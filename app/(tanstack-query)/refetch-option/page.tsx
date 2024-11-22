import { Article } from "@/components/article";
import Callout from "@/components/callout";
import CustomIframe from "@/components/custom-iframe";
import React from "react";

export default function Page() {
  return (
    <Article>
      <Article.Body>
        <Article.Title>If refetchOnMount is false</Article.Title>
        <Article.Content>
          <Article.Description>
            <p>
              refetchOnMount의 값이 false라면, 컴포넌트가 마운트 됐을 때
              자동으로 리페칭을 하지 않는다.
            </p>
            <p>
              과연 <strong>무조건 리페칭을 하지 않는 것일까?</strong>
            </p>
          </Article.Description>
          <div>
            <CustomIframe src="https://stackblitz.com/edit/tanstack-query-fkjhxf?embed=1&file=src%2Findex.tsx&view=editor" />
          </div>
          <Article.Description>
            <p>
              위 예제에서 staleTime, gcTime, refetchOnMount는 각각 3000, 5000,
              false 이다.
            </p>
            <p>
              쿼리는 처음에 fresh 상태였다가 3초가 지나면, stale 상태가 된다.
            </p>
            <br />
            <div>
              <Article.Subtitle>Before gcTime</Article.Subtitle>
              <p>
                컴포넌트를 언마운트하고 gcTime이 지나기 전에 다시 마운트하면,
                쿼리는 여전히 stale 함을 볼 수 있다.
              </p>
            </div>
            <div>
              <Article.Subtitle>After gcTime</Article.Subtitle>
              <p>
                gcTime이 지난 후에 컴포넌트를 다시 마운트하면, refetchOnMount가
                false 임에도 불구하고 자동으로 리페칭이 발생한다.
              </p>
            </div>
          </Article.Description>
          <Callout>
            <p>
              refetchOnMount가 false라도 gcTime이 지나고 다시 마운트를 한다면
              자동으로 리페칭이 발생한다.
            </p>
            <p>즉, 자동 리페칭 refetchOnMount: false 에서 데이터(쿼리)가 존재하지 않을 때 발생하는 것이며, 쿼리가 어떤 상태(stale, fresh)로든 존재한다면 발생하지 않는다.</p>
          </Callout>
        </Article.Content>
      </Article.Body>
      <Article.Body className="pt-10">
        <Article.Title>When is gcTime measured?</Article.Title>
        <Article.Content>
          <Article.Description>
            <p>
              gcTime은 데이터가 오래된(stale)한 상태가 된 이후에 측정되는 시간이
              아니다.
            </p>
            <p>
              데이터가 사용되지 않는(inactive) 상태가 된 이후에 측정되는
              시간이다.
            </p>
            <br />
          </Article.Description>
          <Callout>
            만약, 데이터가 오래된 상태가 된 이후에 측정되는 시간이라면, 데이터가
            stale 상태가 된 이후에 5초가 지나면 메모리에서 사라져야 하지만
            그렇지 않음을 볼 수 있다.
          </Callout>
        </Article.Content>
      </Article.Body>
    </Article>
  );
}
