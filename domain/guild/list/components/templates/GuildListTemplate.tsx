import React from "react";
import { GuildResponses } from "../../../../../api/guild/types";
import styled from "@emotion/styled";
import GuildListOrg from "../organisms/GuildListOrg";
import SmallButton from "../../../../common/components/atoms/buttons/SmallButton";
import AddButton from "../../../../common/components/atoms/buttons/AddButton";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../../../common/constants/routerPath";

const Container = styled.div`
  box-sizing: border-box;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const GuildCreatButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
`;

interface Props {
  guildResponses: GuildResponses;
}

const GuildListTemplate = ({ guildResponses }: Props) => {
  const router = useRouter();
  return (
    <Container>
      <GuildListOrg guildResponses={guildResponses.guildResponses} />
      <GuildCreatButtonWrapper>
        <AddButton
          onClick={() => {
            router.push(ROUTER_PATH.GUILD_CREATE);
          }}
        />
      </GuildCreatButtonWrapper>
    </Container>
  );
};

export default GuildListTemplate;
