import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LoginBox = styled.div<{ isEddy: boolean }>`
  border: 1px solid red;
  margin: auto;
`;

const LoginTemplate = () => {
  return (
    <Container>
      <LoginBox isEddy={true}>로그인 페이지</LoginBox>
    </Container>
  );
};

export default LoginTemplate;
