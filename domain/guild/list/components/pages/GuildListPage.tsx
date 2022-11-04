import React, { useEffect } from "react";
import GuildListTemplate from "../templates/GuildListTemplate";
import GuildSearchHeader from "../molecules/GuildSearchHeader";
import styled from "@emotion/styled";
import { useInfiniteGuildSearch } from "../../../../../api/guild/query/useInfiniteGuildSearch";
import Loading from "../../../../common/components/molecules/Loading";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  position: relative;
  height: 100%;

  overflow-y: auto;
`;
const EndLine = styled.div`
  padding: 0.5rem;
`;

interface Props {}

const GuildListPage = ({}: Props) => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteGuildSearch({ size: 5 });

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <Container>
      <GuildSearchHeader />
      {data?.pages.map((page, index) => (
        <GuildListTemplate guildFindContents={page.guilds} setPageSize={5} />
      ))}
      {isFetchingNextPage ? <Loading /> : <EndLine ref={ref} />}
    </Container>
  );
};

export default GuildListPage;
