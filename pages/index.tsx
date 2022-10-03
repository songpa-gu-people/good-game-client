import React from "react";
import { GetServerSideProps } from "next";
import MatchingOptionService from "../api/matching/MatchingOptionService";
import axios from "axios";
import { ROUTER_PATH } from "../domain/common/constants/routerPath";
import TokenValidator from "../domain/common/utils/TokenValidator";
import HomeTemplate from "../domain/home/components/templates/HomeTemplate";
import BaseTemplateWithFooter from "../domain/common/components/templates/BaseTemplateWithFooter";

const Index = () => {
  return (
    <BaseTemplateWithFooter>
      <HomeTemplate />
    </BaseTemplateWithFooter>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  axios.defaults.headers["Cookie"] = context.req.headers.cookie;
  const isValidToken = await TokenValidator.isValidRefreshToken();
  if (!isValidToken) {
    return {
      redirect: {
        permanent: false,
        destination: ROUTER_PATH.LOGIN,
      },
      props: {},
    };
  }

  return { props: {} };
};

export default Index;
