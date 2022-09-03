import React from "react";
import styled from "@emotion/styled";
import useKakaoLogin from "../../../../../hooks/login/useKakaoLogin";

const Button = styled.img`
  cursor: pointer;
`;

const KakaoLoginButton = () => {
  const { kakaoLoginUrl } = useKakaoLogin();

  return (
    <a href={kakaoLoginUrl}>
      <Button src={"/images/login/kakao_login_medium_narrow.png"} />
    </a>
    // <Link href={"/join"} passHref>
    //   <a>
    //     <Button src={"/images/login/kakao_login_medium_narrow.png"} />
    //   </a>
    // </Link>
  );
};

export default KakaoLoginButton;
