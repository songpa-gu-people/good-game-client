import React from "react";
import LoginTemplate from "../domain/login/components/templates/LoginTemplate";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { COOKIE } from "../domain/global/constants/cookie";
import MatchingOptionService from "../api/matching/MatchingOptionService";
import axios from "axios";

const Index = () => {
  return (
    <div>
      <LoginTemplate />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // @ts-ignore
  axios.defaults.headers.Cookie = context.req.headers.cookie;

  const allCookies = cookies(context);
  const refreshTokenByCookie = allCookies[COOKIE.refreshToken];

  if (refreshTokenByCookie) {
    const matchingOption = await MatchingOptionService.getMyMatchingOption();
    return {
      redirect: {
        permanent: false,
        destination: matchingOption.data.data.exist ? "/home" : "/join",
      },
      props: {},
    };
  }

  return { props: {} };
};

export default Index;
