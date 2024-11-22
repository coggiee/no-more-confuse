import "../globals.css";
import Callout from "@/components/callout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="space-y-5 pb-10">
      <Callout>
        <p>
          Server Action은 서버 측 상태를 업데이트하는 mutation을 위해
          설계되었으며 데이터 fetching에는 권장되지 않습니다.
        </p>
        <div>
          <p>모든 시간은 Performance API로 측정됩니다.</p>
          <p>
            따라서, 이전 페이지에 머무르는 시간이 길어지면, 그래프가 매끄럽게
            표현되지 않을 수 있습니다.
          </p>
          <p>이때는 새로고침을 해주세요.</p>
        </div>
      </Callout>
      {children}
    </main>
  );
}
