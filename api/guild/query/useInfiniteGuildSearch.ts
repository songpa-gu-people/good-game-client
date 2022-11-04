import { GuildFindMoreRequest } from "../types";
import { useInfiniteQuery } from "react-query";
import GuildService from "../GuildService";

const fetchGuild = async (pageNumber, request: GuildFindMoreRequest) => {
  const res = await GuildService.searchGuild({ ...request, pageNumber: pageNumber });
  const existNext = res.data.data.pageResponse.totalPageSize > pageNumber;
  return { guilds: res.data.data.contents, nextPage: pageNumber + 1, existNext: existNext };
};

export function useInfiniteGuildSearch(request: GuildFindMoreRequest) {
  return useInfiniteQuery(
    ["useInfiniteGuildSearch"],
    ({ pageParam = 0 }) => fetchGuild(pageParam, request),
    {
      getNextPageParam: (lastPage) => (lastPage.existNext ? lastPage.nextPage : undefined),
    },
  );
}
