import { getUser } from "@/utils/getUser";
import { useQueries, useQuery } from "@tanstack/react-query";

type Query = {
  key: string;
  endPoint: string;
};

type Queries = Omit<Query, "enabled">[];

export const useTrackedQuery = ({ key, endPoint }: Query) => {
  const { data, isLoading, error, isPending } = useQuery({
    queryKey: [key],
    queryFn: () => getUser(endPoint),
  });

  if (error) throw error;

  return { data, isLoading, isPending };
};

export const useTrackedQueries = (queries: Queries) => {
  const result = useQueries({
    queries: queries.map((query) => ({
      queryKey: [query.key],
      queryFn: () => getUser(query.endPoint),
    })),
  });

  return result;
};
