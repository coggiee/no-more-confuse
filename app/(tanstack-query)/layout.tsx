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
        <div>
          <p>
            병렬로 처리되는 요청이더라도, 각 요청의 시작 시간은 미세하게 차이가
            날 수 있습니다.
          </p>
          <p>정확한 비교는 각 요청의 시작 시간과 끝 시간을 확인해 주세요.</p>
        </div>
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
