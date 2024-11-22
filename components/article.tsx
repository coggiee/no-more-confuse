/* eslint-disable @typescript-eslint/no-empty-object-type */
import { cn } from "@/lib/utils";
import React from "react";

interface Child extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface ArticleBodyProps extends Child {}

function ArticleBody({ children, className, ...props }: ArticleBodyProps) {
  return (
    <section className={cn("space-y-10", className)} {...props}>
      {children}
    </section>
  );
}

interface ArticleTitleProps extends Child {}

function ArticleTitle({ children, className, ...props }: ArticleTitleProps) {
  return (
    <header>
      <h1
        className={cn("font-black font-geistsans text-2xl", className)}
        {...props}
      >
        {children}
      </h1>
    </header>
  );
}

interface ArticleSubtitleProps extends Child {}

function ArticleSubtitle({
  children,
  className,
  ...props
}: ArticleSubtitleProps) {
  return (
    <header>
      <h2
        className={cn("font-bold font-geistsans text-xl", className)}
        {...props}
      >
        {children}
      </h2>
    </header>
  );
}

interface ArticleContentProps extends Child {}

function ArticleContent({
  children,
  className,
  ...props
}: ArticleContentProps) {
  return (
    <article className={cn("space-y-5", className)} {...props}>
      {children}
    </article>
  );
}

interface ArticleDescriptionProps extends Child {}

function ArticleDescription({
  children,
  className,
  ...props
}: ArticleDescriptionProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

interface ArticleFooterProps extends Child {}

function ArticleFooter({ children, className, ...props }: ArticleFooterProps) {
  return (
    <footer className={cn(className)} {...props}>
      {children}
    </footer>
  );
}

interface ArticleContainerProps extends Child {}

function ArticleContainer({
  children,
  className,
  ...props
}: ArticleContainerProps) {
  return (
    <main className={cn(className)} {...props}>
      {children}
    </main>
  );
}

export const Article = Object.assign(ArticleContainer, {
  Body: ArticleBody,
  Title: ArticleTitle,
  Subtitle: ArticleSubtitle,
  Content: ArticleContent,
  Description: ArticleDescription,
  Footer: ArticleFooter,
});
