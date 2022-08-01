import React from "react";
import styled from "@emotion/styled";
import palette from "../../../../styles/palette";

const Container = styled.div`
  display: flex;
  background: ${palette.blue_1};
  color: ${palette.white};
  padding: 0.5rem;
  border-radius: 0.5rem;
  justify-content: center;
`;

interface Props {
  buttonText: string;
  onClick;
}

const SubmitLargeButton = ({ buttonText, onClick }: Props) => {
  return <Container onClick={onClick}>{buttonText}</Container>;
};

export default SubmitLargeButton;
