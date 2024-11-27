type Item = {
  key: string;
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
        key: "useQuery",
        href: "/use-query",
      },
      {
        key: "useQueries",
        href: "/use-queries",
      },
      {
        key: "useSuspenseQuery",
        href: "/use-suspense-query",
      },
      {
        key: "useSuspenseQueries",
        href: "/use-suspense-queries",
      },
      {
        key: "refetchOption",
        href: "/refetch-option",
      },
    ],
  },
  {
    category: "next-js",
    items: [
      {
        key: "serverAction",
        href: "/action",
      },
    ],
  },
];
