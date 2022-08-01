import React from "react";
import KakaoLoginButton from "../../atoms/buttons/KakaoLoginButton";
import styled from "@emotion/styled";

const LoginBox = styled.div``;

const LoginButtonGroup = () => {
  return (
    <LoginBox>
      <KakaoLoginButton />
    </LoginBox>
  );
};

export default LoginButtonGroup;
