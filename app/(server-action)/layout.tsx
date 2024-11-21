import "../globals.css";
import Callout from "@/components/Callout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="space-y-5">
      <Callout>
        <p>
          Server Action은 서버 측 상태를 업데이트하는 mutation을 위해
          설계되었으며 데이터 fetching에는 권장되지 않습니다.
        </p>
      </Callout>
      {children}
    </main>
  );
}
