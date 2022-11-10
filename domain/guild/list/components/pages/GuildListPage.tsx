import React from "react";
import GuildListTemplate from "../templates/GuildListTemplate";
import GuildSearchHeader from "../molecules/GuildSearchHeader";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  height: 100%;

  overflow-y: auto;
`;

interface Props {}

const GuildListPage = ({}: Props) => {
  return (
    <Container>
      <GuildSearchHeader />
      <GuildListTemplate />
    </Container>
  );
};

export default GuildListPage;
