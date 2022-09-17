import React from "react";
import LoginTemplate from "../../domain/login/components/templates/LoginTemplate";
import { GetServerSideProps } from "next";
import axios from "axios";
import TokenValidator from "../../domain/global/utils/TokenValidator";
import { ROUTER_PATH } from "../../domain/global/constants/routerPath";
import MatchingOptionService from "../../api/matching/MatchingOptionService";

const Index = () => {
  return <LoginTemplate />;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  axios.defaults.headers["Cookie"] = context.req.headers.cookie;
  const isValidToken = await TokenValidator.isValidRefreshToken();
  if (!isValidToken) {
    return { props: {} };
  }

  const matchingOption = await MatchingOptionService.getMyMatchingOption();
  return {
    redirect: {
      permanent: false,
      destination: matchingOption.data.data.exist ? ROUTER_PATH.INDEX : ROUTER_PATH.JOIN,
    },
    props: {},
  };
};
