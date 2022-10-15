import React from "react";
import { GuildResponse } from "../../../../../api/guild/types";
import styled from "@emotion/styled";
import palette from "../../../../../styles/palette";

const Container = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
  
  border-bottom: 1px solid ${palette.gray_2};
  
  height: 6rem;
`;

interface Props {
  guild: GuildResponse;
}

const GuildListItem = ({ guild }: Props) => {
  return <Container>{guild.guildName}</Container>;
};

export default GuildListItem;
