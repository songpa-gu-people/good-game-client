import React from "react";
import styled from "@emotion/styled";
import palette from "../../../../../styles/palette";

const Container = styled.div`
  background: ${palette.blue_1};
  color: ${palette.white};
  padding: 0.5rem;
  border-radius: 0.5rem;
  justify-content: center;
`;

interface Props {
  children;
  onClick;
}

const SmallButton = ({ children, onClick }: Props) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default SmallButton;
