/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Customized,
  Rectangle,
} from "recharts";

const CustomizedRectangle = ({ data, minStartTime, maxEndTime }: any) => {
  const normalize = (value: number) => value - minStartTime; // 가장 빠른 쿼리의 시작 시간 기준으로 보정

  return data.map((item: any, index: any) => {
    const normalizedStart = normalize(item.startTime);
    const normalizedEnd = normalize(item.endTime);
    const width = Math.abs(normalizedEnd - normalizedStart);
    const x = normalizedStart; // 막대의 시작점

    return (
      <Rectangle
        key={item.name}
        width={width}
        height={20}
        x={x + maxEndTime - minStartTime} // 보정된 시작점
        y={index * 50 + 10} // 막대의 세로 위치
        fill="#30b563"
        rx={3}
        ry={3}
      />
    );
  });
};

const TimeChart = ({ data }: { data: any }) => {
  const minStartTime = Math.min(...data.map((d: any) => d.startTime)); // 가장 빠른 쿼리의 시작 시간
  const maxEndTime = Math.max(...data.map((d: any) => d.endTime)); // 가장 늦은 쿼리의 종료 시간

  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart
        data={data}
        layout="vertical"
        margin={{
          top: 20,
          right: 30,
          left: 40,
          bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          label={{ value: "Time (ms)", position: "bottom" }}
        />
        <YAxis
          dataKey="name"
          type="category"
          width={80}
          style={{ fontSize: "14px" }}
        />
        <Tooltip />
        <Customized
          component={() => (
            <CustomizedRectangle
              data={data}
              minStartTime={minStartTime}
              maxEndTime={maxEndTime}
            />
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeChart;
