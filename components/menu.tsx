"use client";

import { links } from "@/constants/menu-link";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Menu() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 p-5 border-r h-full w-80">
      <header>
        <Link href="/" className="block">
          <h1 className="text-4xl">🫨 🔜 😄</h1>
        </Link>
      </header>
      {links.map(({ category, items }) => (
        <div key={category}>
          <h3 className="font-black text-sm font-geistsans mt-4 p-2">
            {category}
          </h3>
          <ul className="flex flex-col gap-2">
            {items.map(({ label, href }) => (
              <li
                key={href}
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
