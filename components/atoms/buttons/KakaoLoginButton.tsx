import React from "react";
import styled from "@emotion/styled";
import axios from "axios";
import useKakaoLogin from "../../../hooks/login/useKakaoLogin";

const Button = styled.img`
  cursor: pointer;
`;

const KakaoLoginButton = () => {
  const { kakaoLoginUrl } = useKakaoLogin();

  //todo 로그인 구현되면 삭제 예정
  async function getUser(token) {
    const user = await axios.get(
      `https://kapi.kakao.com/v1/user/access_token_info`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(user);
  }

  return (
    <a href={kakaoLoginUrl}>
      <Button src={"/images/login/kakao_login_medium_narrow.png"} />
    </a>
  );
};

export default KakaoLoginButton;
