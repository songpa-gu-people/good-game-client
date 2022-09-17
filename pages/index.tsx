import React from "react";
import LoginTemplate from "../domain/login/components/templates/LoginTemplate";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { COOKIE } from "../domain/global/constants/cookie";
import MatchingOptionService from "../api/matching/MatchingOptionService";
import axios from "axios";
import { ROUTER_PATH } from "../const/ROUTER_PATH";

const Index = () => {
  return (
    <div>
      <LoginTemplate />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  axios.defaults.headers["Cookie"] = context.req.headers.cookie;

  const allCookies = cookies(context);
  const refreshTokenByCookie = allCookies[COOKIE.REFRESH_TOKEN];

  if (refreshTokenByCookie) {
    const matchingOption = await MatchingOptionService.getMyMatchingOption();
    return {
      redirect: {
        permanent: false,
        destination: matchingOption.data.data.exist ? ROUTER_PATH.HOME : ROUTER_PATH.JOIN,
      },
      props: {},
    };
  }

  return { props: {} };
};

export default Index;
