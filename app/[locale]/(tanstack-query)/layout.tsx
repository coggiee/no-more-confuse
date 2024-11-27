/* eslint-disable react-hooks/rules-of-hooks */
import { languages } from "@/i18n/settings";
import "../globals.css";
import Callout from "@/components/callout";
import { useTranslation } from "@/i18n";

export async function generateStaticParams() {
  return languages.map((lang) => ({ locale: lang }));
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;
  const { t } = await useTranslation(locale, "tanstack-query");

  return (
    <main className="space-y-5 pb-10">
      <Callout>
        {t("title")
          .split("\n")
          .map((item, index) => (
            <p key={index}>{item}</p>
          ))}
      </Callout>
      {children}
    </main>
  );
}
