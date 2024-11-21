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
          병렬로 처리되는 요청이더라도, 각 요청의 시작 시간은 미세하게 차이가 날
          수 있습니다.
        </p>
        <p>정확한 비교는 각 요청의 시작 시간과 끝 시간을 확인해 주세요.</p>
      </Callout>
      {children}
    </main>
  );
}
