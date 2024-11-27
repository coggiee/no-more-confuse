/* eslint-disable react-hooks/rules-of-hooks */
import { Article } from "@/components/article";
import { Boundary } from "@/components/boundary";
import ServerActionUseQuery from "@/components/server-action/server-action-use-query";
import { useTranslation } from "@/i18n";
import React from "react";

export default async function Page({ params }: { params: { locale: string }}) {
  const { locale } = await params;
  const { t } = await useTranslation(locale, "server-action");

  return (
    <Article>
      <Article.Body>
        <Article.Title>{t("sequential-task-handling.title")}</Article.Title>
        <Article.Content className="space-y-2">
          <Article.Description></Article.Description>
          <div className="flex flex-col gap-3 bg-gray-100 rounded-xl p-5 py-10">
            <Boundary labels={["useQuery with Server Action"]} size="small">
              <ServerActionUseQuery />
            </Boundary>
          </div>
          <Article.Description>
            {t("sequential-task-handling.content")
              .split("\n")
              .map((item, index) => (
                <p key={index}>{item}</p>
              ))}
          </Article.Description>
        </Article.Content>
      </Article.Body>
      <Article.Body className="space-y-10 pt-10">
        <Article.Title>{t("prisma-client.title")}</Article.Title>
        <Article.Content className="space-y-2">
          <Article.Description>
            {t("prisma-client.content")
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
