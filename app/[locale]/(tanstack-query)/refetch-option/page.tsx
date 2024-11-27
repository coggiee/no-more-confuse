/* eslint-disable react-hooks/rules-of-hooks */
import { Article } from "@/components/article";
import Callout from "@/components/callout";
import CustomIframe from "@/components/custom-iframe";
import { useTranslation } from "@/i18n";
import React from "react";

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const { t } = await useTranslation(locale, "refetch");

  return (
    <Article>
      <Article.Body>
        <Article.Title>{t("refetchOnMount.title")}</Article.Title>
        <Article.Content>
          <div>
            <CustomIframe src="https://stackblitz.com/edit/tanstack-query-fkjhxf?embed=1&file=src%2Findex.tsx&view=editor" />
          </div>
          <Article.Description>
            <p>
              {t("refetchOnMount.content")
                .split("\n")
                .map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
            </p>
            <div className="my-5">
              <Article.Subtitle>
                {t("refetchOnMount.items.before.title")}
              </Article.Subtitle>
              <Article.Description>
                {t("refetchOnMount.items.before.content")}
              </Article.Description>
            </div>
            <div>
              <Article.Subtitle>
                {t("refetchOnMount.items.after.title")}
              </Article.Subtitle>
              <Article.Description>
                {t("refetchOnMount.items.after.content")}
              </Article.Description>
            </div>
          </Article.Description>
          <Callout>
            {t("refetchOnMount.callout")
              .split("\n")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </Callout>
        </Article.Content>
      </Article.Body>
      <Article.Body className="pt-10">
        <Article.Title>{t("gcTime.title")}</Article.Title>
        <Article.Content>
          <Article.Description>
            {t("gcTime.content")
              .split("\n")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            <br />
          </Article.Description>
          <Callout>
            {t("gcTime.callout")
              .split("\n")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </Callout>
        </Article.Content>
      </Article.Body>
    </Article>
  );
}
