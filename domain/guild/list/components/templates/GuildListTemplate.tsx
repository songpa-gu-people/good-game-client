import React, { useEffect, useRef } from "react";
import { GuildFindContent } from "../../../../../api/guild/types";
import styled from "@emotion/styled";
import GuildListOrg from "../organisms/GuildListOrg";
import AddButton from "../../../../common/components/atoms/buttons/AddButton";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../../../common/constants/routerPath";
import { useInView } from "react-intersection-observer";
import { useInfiniteGuildSearch } from "../../../../../api/guild/query/useInfiniteGuildSearch";
import Loading from "../../../../common/components/molecules/Loading";

const Container = styled.div`
  box-sizing: border-box;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const GuildCreatButtonWrapper = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 0;
  margin: 1rem;
`;

const EndLine = styled.div`
  padding: 0.5rem;
`;


interface Props {}

const GuildListTemplate = ({}: Props) => {
  const router = useRouter();
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteGuildSearch({ size: 6 });

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <Container>
      {data?.pages.map((page, index) => (
        <GuildListOrg key={index} guildResponses={page.guilds} />
      ))}
      <GuildCreatButtonWrapper>
        <AddButton
          onClick={() => {
            router.push(ROUTER_PATH.GUILD_CREATE);
          }}
        />
      </GuildCreatButtonWrapper>
      {isFetchingNextPage ? <Loading /> : <EndLine ref={ref} />}
    </Container>
  );
};

export default GuildListTemplate;
