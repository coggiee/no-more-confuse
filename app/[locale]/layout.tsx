import { dir } from "i18next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import Menu from "@/components/menu";
import { languages } from "@/i18n/settings";
import LanguageSwitcher from "@/components/language-switcher";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "No More Confuse",
  description: "이제 더 이상 헷갈리지 말자!",
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ locale: lang }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;

  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh font-geistsans`}
      >
        <div className="flex min-h-screen">
          <aside className="sticky top-0 left-0 p-5 border-r h-screen w-80">
            <div className="relative h-full overscroll-y-none">
              <Menu locale={locale} />
            </div>
          </aside>
          <main className="flex-1 overflow-auto">
            <section className="container py-10 max-w-7xl flex flex-col gap-5 items-end">
              <div className="relative">
                <LanguageSwitcher locale={locale} />
              </div>
              <Providers>{children}</Providers>
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
