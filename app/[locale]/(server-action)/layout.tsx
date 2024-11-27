/* eslint-disable react-hooks/rules-of-hooks */
import "../globals.css";
import Callout from "@/components/callout";
import { useTranslation } from "@/i18n";

type Params = Promise<{ locale: string }>;

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { locale } = await params;
  const { t } = await useTranslation(locale, "nextjs");

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
