import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import Menu from "@/components/menu";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh font-geistsans`}
      >
        <main className="flex gap-5 h-full relative">
          <Menu />
          <section className="container py-10 max-w-7xl overflow-y-scroll overscroll-y-none [&::-webkit-scrollbar]:hidden">
            <Providers>{children}</Providers>
          </section>
        </main>
      </body>
    </html>
  );
}
