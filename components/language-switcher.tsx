"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  // const { t } = useTranslation(locale, "footer");
  const subpath = pathname.split("/")[2];

  return (
    <footer className="sticky top-0 h-full">
      <Select defaultValue="ko">
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent defaultValue={"ko"}>
          <Link href={`/${locale}/${subpath}`}>
            <SelectItem value="ko">한국어</SelectItem>
          </Link>
          <Link href={`/${locale}/${subpath}`}>
            <SelectItem value="en">English</SelectItem>
          </Link>
        </SelectContent>
      </Select>
      {/* {languages.map((l) => {
        return (
          <span key={l}>
            <Link href={`/${l}`}>{l}</Link>
          </span>
        );
      })} */}
    </footer>
  );
}
