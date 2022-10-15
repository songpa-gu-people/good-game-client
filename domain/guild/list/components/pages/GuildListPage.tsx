import React from "react";
import GuildListTemplate from "../templates/GuildListTemplate";
import GuildSearchHeader from "../molecules/GuildSearchHeader";
import { GuildResponses } from "../../../../../api/guild/types";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  height: 100%;
`;

interface Props {}

const GuildListPage = ({}: Props) => {
  const mock: GuildResponses = {
    guildResponses: [
      {
        guildName: "guildName1",
        guildNumber: "num",
      },
      {
        guildName: "guildName2",
        guildNumber: "num",
      },
      {
        guildName: "guildName3",
        guildNumber: "num",
      },
    ],
    pageResponse: {
      totalPageSize: 1,
      currentPage: 0,
    },
  };

  return (
    <Container>
      <GuildSearchHeader />
      <GuildListTemplate guildResponses={mock} />
    </Container>
  );
};

export default GuildListPage;
