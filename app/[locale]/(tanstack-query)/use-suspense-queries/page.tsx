/* eslint-disable react-hooks/rules-of-hooks */
import { Article } from "@/components/article";
import { Boundary } from "@/components/boundary";
import SingleUseSuspenseQueries from "@/components/use-suspense-query/single-use-suspense-queries";
import { useTranslation } from "@/i18n";
import React, { Suspense } from "react";

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { t } = await useTranslation(locale, "use-suspense-query");

  return (
    <Article>
      <Article.Body>
        <Article.Title>{t("single-query.title")}</Article.Title>
        <Article.Content>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Suspense fallback={<>Loading...</>}>
              <Boundary labels={["useSuspenseQueries"]} size="small">
                <SingleUseSuspenseQueries />
              </Boundary>
            </Suspense>
          </div>
          <Article.Description>
            {t("single-query.content")
              .split("\n")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </Article.Description>
        </Article.Content>
      </Article.Body>
    </Article>
  );
}
