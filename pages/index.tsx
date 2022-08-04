import React from "react";
import LoginTemplate from "../components/login/templates/LoginTemplate";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { COOKIE } from "../constants/cookie";
import TokenService from "../api/token/TokenService";

const Index = () => {
  return (
    <div>
      <LoginTemplate />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allCookies = cookies(context);
  const refreshTokenByCookie = allCookies[COOKIE.refreshToken];

  const res = await TokenService.getAccessTokenFromRefresh(
    refreshTokenByCookie
  );
  const accessToken = res.data.data;

  return { props: {} };
};

export default Index;
