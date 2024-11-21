import { TimingProps } from "@/types/timingType";
import React from "react";

export default function Time({
  title,
  timing,
}: TimingProps & { title: string }) {
  return (
    <div className="mt-2 text-sm text-gray-700">
      <h1 className="text-lg font-black">{title}</h1>
      <p>
        <strong>Start Time:</strong> {timing.startTime}ms
      </p>
      <p>
        <strong>End Time:</strong> {timing.startTime + timing.duration}
        ms
      </p>
      <p>
        <strong>Duration:</strong> {timing.duration}ms
      </p>
    </div>
  );
}
