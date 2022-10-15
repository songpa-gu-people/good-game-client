import React from "react";
import GuildSearchMol from "../../../search/components/molecules/GuildSearchMol";
import styled from "@emotion/styled";
import SmallButton from "../../../../common/components/atoms/buttons/SmallButton";

const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 40vw auto;

  box-sizing: border-box;
  padding: 1rem;
`;

const GuildCreateButtonWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: right;
`;

interface Props {}

const GuildListTemplate = ({}: Props) => {
  return <div></div>;
};

export default GuildListTemplate;
