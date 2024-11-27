/* eslint-disable react-hooks/rules-of-hooks */
import { links } from "@/constants/menu-link";
import { useTranslation } from "@/i18n";
import Link from "next/link";

type Params = Promise<{ locale: string }>;

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const { t } = await useTranslation(locale, "link");

  return (
    <main className="space-y-5">
      <section className="bg-gray-100 rounded-lg p-10 border border-slate-200 shadow-sm font-geistsans space-y-10">
        {links.map(({ category, items }) => (
          <div key={category} className="space-y-5">
            <header>
              <h1 className="text-base font-black">
                {t(`categories.${category}`)}
              </h1>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {items.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="space-y-1.5 bg-gray-200 rounded-lg px-5 py-3 hover:bg-gray-300 cursor-pointer block"
                >
                  <h1 className="font-semibold text-base">
                    {t(`items.${key}.label`)}
                  </h1>
                  <h2 className="text-sm text-gray-500">
                    {t(`items.${key}.desc`)}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
