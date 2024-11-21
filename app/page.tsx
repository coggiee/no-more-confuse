import Callout from "@/components/Callout";
import Link from "next/link";

const links = [
  {
    category: "tanstack-query",
    items: [
      {
        label: "useQuery",
        desc: "의존성 쿼리, 중첩 컴포넌트 구조 관점에서 살펴 봅니다.",
        href: "/use-query",
      },
      {
        label: "useQueries",
        desc: "여러 개의 useQueries를 더 효율적으로 사용해 봅시다.",
        href: "/use-queries",
      },
      {
        label: "useSuspenseQuery",
        desc: "Suspense의 정의에 유의하여 살펴 봅니다.",
        href: "/use-suspense-query",
      },
      {
        label: "useSuspenseQueries",
        desc: "여러 개의 useSuspenseQuery를 더 효율적으로 사용해 봅시다.",
        href: "/use-suspense-queries",
      },
    ],
  },
  {
    category: "server action",
    items: [
      {
        label: "server action",
        desc: "서버 액션은 병렬 처리가 안됩니다.",
        href: "/action",
      },
    ],
  },
];

export default function Page() {
  return (
    <main className="space-y-5">
      <Callout>
        <p>
          자주 사용하는 라이브러리, 프레임워크에서 창작자(나)가 헷갈린 개념을
          정리합니다. 주제는 계속 추가됩니다!
        </p>
      </Callout>
      <section className="bg-gray-100 rounded-lg p-10 border border-slate-200 shadow-sm font-geistsans space-y-10">
        {links.map(({ category, items }) => (
          <div key={category} className="space-y-5">
            <header>
              <h1 className="text-base font-black">{category}</h1>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {items.map(({ label, desc, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="space-y-1.5 bg-gray-200 rounded-lg px-5 py-3 hover:bg-gray-300 cursor-pointer block"
                >
                  <h1 className="font-semibold text-base">{label}</h1>
                  <h2 className="text-sm text-gray-500">{desc}</h2>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
