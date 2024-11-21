"use server";

import axios from "axios";

export const serverAction = async (endPoint: string) => {
  const start = Math.floor(performance.now());
  const { data } = await axios(endPoint);
  const end = Math.floor(performance.now());

  return {
    data,
    timing: {
      startTime: start,
      endTime: end,
      duration: end - start,
    },
  };
};
