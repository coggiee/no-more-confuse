import { Boundary } from "@/components/Boundary";
import ServerActionUseQuery from "@/components/server-action/server-action-use-query";
import React from "react";

export default function Page() {
  return (
    <main>
      <section className="space-y-10">
        <header>
          <h1 className="font-black font-geistsans text-2xl">
            Sequential Task handling
          </h1>
        </header>
        <article className="space-y-2">
          <div>
            <p>
              다수의 useQuery를 호출하거나, useQueries를 사용하면 각 쿼리가
              병렬로 처리된다.
            </p>
            <p>
              그러나, Server Action을 함께 사용한다면, 각 쿼리는 병렬로 처리되지
              않는다.
            </p>
            <p>
              NextJS의 의도인지는 모르겠으나, 서버 상태를 업데이트하는 일종의
              mutation의 목적으로 디자인 되었기 때문에 데이터를 가져오는
              작업에는 추천되지 않으며 한 번에 단 하나의 작업만 수행한다.
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["useQuery with Server Action"]} size="small">
              <ServerActionUseQuery />
            </Boundary>
          </div>
          <div>
            <p>
              위는 Server Action을 결합한 다수의 useQuery를 사용한 결과이다.
            </p>
            <p>
              보시다시피, 각 작업은 병렬이 아닌 하나의 작업이 끝나고 다른 작업이
              수행되는 "직렬 태스크 처리"가 진행된다.
            </p>
          </div>
        </article>
      </section>
      <section className="space-y-10 pt-10">
        <header>
          <h1 className="font-black font-geistsans text-2xl">
            What if you use the prisma client?
          </h1>
        </header>
        <article className="space-y-2">
          <div>
            <p>
              &ldquo;@prisma/client&rdquo;가 제공하는 PrismaClient는 서버에서만
              접근이 가능하다.
            </p>
            <p>
              NextJS에서 prisma에 접근해야 하고 다수의 데이터 패칭을 할 경우에는
              어떻게 할까?
            </p>
            <p>
              서버 액션은 "직렬 태스크 처리"이기 때문에 적합하지 않으므로,
              이때는 route handler로 API route를 작성하자.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
