import React from "react";
import styled from "@emotion/styled";
import KakaoLoginButton from "../atoms/buttons/KakaoLoginButton";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LoginBox = styled.div`
  margin: auto;
`;

const LoginTemplate = () => {

  return (
    <Container>
      <LoginBox>
        <KakaoLoginButton />
      </LoginBox>
    </Container>
  );
};

export default LoginTemplate;
