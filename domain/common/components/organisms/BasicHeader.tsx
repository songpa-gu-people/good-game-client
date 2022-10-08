import React from "react";
import styled from "@emotion/styled";
import BackIcon from "../atoms/svgs/BackIcon";
import Typography from "../atoms/Typography";
import palette from "../../../../styles/palette";
import Flex from "../atoms/wrapper/Flex";
import { useRouter } from "next/router";

const Container = styled.div`
  margin-top: 1rem;
  position: sticky;
  box-sizing: border-box;
  border-bottom: 1px solid ${palette.gray_1};

  height: 5rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3rem auto 3rem;

  height: 100%;

`;

const BackIconWrapper = styled.div`
  height: 2rem;
  margin: auto;
`;

interface Props {
  title: string;
}

const BasicHeader = ({ title }: Props) => {
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <BackIconWrapper>
          <BackIcon onClick={() => router.back()} />
        </BackIconWrapper>
        <Flex justifyContent={"center"}>
          <Typography size={"1.3rem"} weight={"700"}>{title}</Typography>
        </Flex>
        <div />
      </Wrapper>
    </Container>
  );
};

export default BasicHeader;
