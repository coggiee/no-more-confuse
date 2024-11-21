import React from "react";

export default function Callout() {
  return (
    <div className="bg-gray-100 h-20 rounded-xl shadow-sm border border-slate-200 p-5 text-sm text-wrap font-semibold">
      <p>
        병렬로 처리되는 요청이더라도, 각 요청의 시작 시간은 미세하게 차이가 날
        수 있습니다.
      </p>
      <p>정확한 비교는 각 요청의 시작 시간과 끝 시간을 확인해 주세요.</p>
    </div>
  );
}
