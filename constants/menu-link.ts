type Item = {
  label: string;
  desc: string;
  href: string;
};

type Link = {
  category: string;
  items: Item[];
};

export const links: Link[] = [
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
        desc: "여러 개의 useQuery를 더 효율적으로 사용해 봅시다.",
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
      {
        label: "refetch option",
        desc: "refetch의 발생 조건은 언제일까?",
        href: "/refetch-option",
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
