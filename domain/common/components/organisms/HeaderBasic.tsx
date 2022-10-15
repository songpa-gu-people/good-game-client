import React from "react";
import styled from "@emotion/styled";
import Typography from "../atoms/Typography";
import Flex from "../atoms/wrapper/Flex";
import { HeaderContainer } from "../../styled/HeaderContainer";
import BackButton from "../molecules/BackButton";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3rem auto 3rem;

  height: 100%;
`;

interface Props {
  title: string;
}

const HeaderBasic = ({ title }: Props) => {
  return (
    <HeaderContainer>
      <Wrapper>
        <BackButton />
        <Flex justifyContent={"center"}>
          <Typography size={"1.3rem"} weight={"700"}>
            {title}
          </Typography>
        </Flex>
        <div />
      </Wrapper>
    </HeaderContainer>
  );
};

export default HeaderBasic;
