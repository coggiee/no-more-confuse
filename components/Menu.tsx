"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    category: "tanstack-query",
    items: [
      {
        label: "useQuery",
        href: "/use-query",
      },
      {
        label: "useQueries",
        href: "/use-queries",
      },
      {
        label: "useSuspenseQuery",
        href: "/use-suspense-query",
      },
      {
        label: "useSuspenseQueries",
        href: "/use-suspense-queries",
      },
    ],
  },
  {
    category: "server action",
    items: [
      {
        label: "server action",
        href: "/server-action",
      },
    ],
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <aside className="p-5 border-r h-full w-80">
      {links.map(({ category, items }) => (
        <div key={category}>
          <h3 className="font-black text-sm font-geistsans mt-4 p-2">
            {category}
          </h3>
          <ul className="flex flex-col gap-2">
            {items.map(({ label, href }) => (
              <li
                key={href} // href를 key로 사용
                className={cn(
                  "font-medium font-geistsans hover:bg-gray-100 text-sm p-2 rounded-lg text-gray-500",
                  pathname === href && "text-black"
                )}
              >
                <Link href={href} className="block">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
