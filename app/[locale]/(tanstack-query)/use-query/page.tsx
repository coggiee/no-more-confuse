/* eslint-disable react-hooks/rules-of-hooks */
import { Article } from "@/components/article";
import { Boundary } from "@/components/boundary";
import CustomIframe from "@/components/custom-iframe";
import NestedDependentUseQuery from "@/components/use-query/nested-dependent-use-query";
import NestedUseQuery from "@/components/use-query/nested-use-query";
import SingleUseQuery from "@/components/use-query/single-use-query";
import { useTranslation } from "@/i18n";
import React from "react";

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { t } = await useTranslation(locale, "use-query");

  return (
    <Article>
      <Article.Body>
        <Article.Title>{t(`single-query.title`)}</Article.Title>
        <Article.Content>
          <div>
            <CustomIframe src="https://stackblitz.com/edit/tanstack-query-dm673x?embed=1&file=src%2Findex.tsx" />
          </div>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["useQuery + useQuery"]} size="small">
              <SingleUseQuery />
            </Boundary>
          </div>
          <Article.Description>
            {t(`single-query.content`)
              .split("\n")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </Article.Description>
        </Article.Content>
      </Article.Body>
      <Article.Body className="pt-10">
        <Article.Title>{t(`multiple-query.title`)}</Article.Title>
        <Article.Content>
          <Article.Subtitle>
            {t(`multiple-query.items.dependent-query.title`)}
          </Article.Subtitle>
          <div>
            <CustomIframe src="https://stackblitz.com/edit/tanstack-query-yopb4f?embed=1&file=src%2Findex.tsx" />
          </div>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["Dependent useQuery"]} size="small">
              <NestedDependentUseQuery />
            </Boundary>
          </div>
          <Article.Description>
            {t(`multiple-query.items.dependent-query.content`)
              .split("\n")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </Article.Description>
        </Article.Content>
        <Article.Content>
          <Article.Subtitle>
            {t(`multiple-query.items.non-dependent-query.title`)}
          </Article.Subtitle>
          <div>
            <CustomIframe src="https://stackblitz.com/edit/tanstack-query-fmnxpq?embed=1&file=src%2Findex.tsx" />
          </div>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["Non-Dependent useQuery"]} size="small">
              <NestedUseQuery />
            </Boundary>
          </div>
          <Article.Description>
            {t(`multiple-query.items.non-dependent-query.content`)
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
