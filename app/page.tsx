import Callout from "@/components/callout";
import { links } from "@/constants/menu-link";
import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-5">
      <Callout>
        <p>
          자주 사용하는 라이브러리, 프레임워크에서 창작자(나)가 헷갈린 개념을
          정리합니다. 주제는 계속 추가됩니다!
        </p>
      </Callout>
      <section className="bg-gray-100 rounded-lg p-10 border border-slate-200 shadow-sm font-geistsans space-y-10">
        {links.map(({ category, items }) => (
          <div key={category} className="space-y-5">
            <header>
              <h1 className="text-base font-black">{category}</h1>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {items.map(({ label, desc, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="space-y-1.5 bg-gray-200 rounded-lg px-5 py-3 hover:bg-gray-300 cursor-pointer block"
                >
                  <h1 className="font-semibold text-base">{label}</h1>
                  <h2 className="text-sm text-gray-500">{desc}</h2>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
