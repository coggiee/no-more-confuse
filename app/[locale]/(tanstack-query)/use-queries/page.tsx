/* eslint-disable react-hooks/rules-of-hooks */
import { Article } from "@/components/article";
import { Boundary } from "@/components/boundary";
import SingleUseQueries from "@/components/use-query/single-use-queries";
import { useTranslation } from "@/i18n";
import React from "react";

type Params = Promise<{ locale: string }>;

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const { t } = await useTranslation(locale, "use-query");

  return (
    <Article>
      <Article.Body>
        <Article.Title>{t("single-query.title")}</Article.Title>
        <Article.Content>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["useQueries"]} size="small" width="default">
              <SingleUseQueries />
            </Boundary>
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
