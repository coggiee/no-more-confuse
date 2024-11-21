"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
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
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <aside className="p-5 border-r h-full w-80">
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href }) => (
          <li
            key={label}
            className={cn(
              "font-medium font-geistsans hover:bg-gray-100 text-base p-2 rounded-lg text-gray-500",
              pathname === href && "text-black"
            )}
          >
            <Link href={href} className="block">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
