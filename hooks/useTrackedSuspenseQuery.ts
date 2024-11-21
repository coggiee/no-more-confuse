import { getUser } from "@/utils/getUser";
import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";

type Query = {
  key: string;
  endPoint: string;
};

type Queries = Query[];

export const useTrackedSuspenseQuery = ({ key, endPoint }: Query) => {
  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: [key],
    queryFn: () => getUser(endPoint),
  });

  if (error) throw error;

  return { data, isLoading };
};

export const useTrackedSuspenseQueries = (queries: Queries) => {
  const result = useSuspenseQueries({
    queries: queries.map((query) => ({
      queryKey: [query.key],
      queryFn: () => getUser(query.endPoint),
    })),
  });

  return result;
};
