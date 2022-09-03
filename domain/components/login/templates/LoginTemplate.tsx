import React from "react";
import styled from "@emotion/styled";
import LoginButtonGroup from "../organisms/login/LoginButtonGroup";
import Flex from "../../../../components/global/atoms/wrapper/Flex";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Wrapper = styled.div`
  margin: auto;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin: auto;
`;

const LoginTemplate = () => {
  return (
    <Container>
      <Wrapper>
        <Flex flexDirection={"column"} gap={"1rem"}>
          <Title>🏸 GoodGame</Title>
          <Flex justifyContent={"center"}>
            <LoginButtonGroup />
          </Flex>
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default LoginTemplate;
