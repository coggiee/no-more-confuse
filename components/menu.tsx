"use client";

import { links } from "@/constants/menu-link";
import { useTranslation } from "@/i18n/client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Menu({ locale }: { locale: string }) {
  const pathname = usePathname();
  const { t } = useTranslation(locale, "link");

  return (
    <aside className="sticky top-0 left-0 h-full w-full">
      <header>
        <Link href="/" className="block">
          <h1 className="text-4xl">🫨 🔜 😄</h1>
        </Link>
      </header>
      {links.map(({ category, items }) => (
        <div key={category}>
          <h3 className="font-black text-sm font-geistsans mt-4 p-2">
            {t(`categories.${category}`)}
          </h3>
          <ul className="flex flex-col gap-2">
            {items.map(({ key, href }) => (
              <li
                key={key}
                className={cn(
                  "font-medium font-geistsans hover:bg-gray-100 text-sm p-2 rounded-lg text-gray-500",
                  pathname === `/${locale}${href}` && "text-black"
                )}
              >
                <Link href={`/${locale}${href}`} className="block">
                  {t(`items.${key}.label`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
