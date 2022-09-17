import React from "react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";
import { useRouter } from "next/router";
import MatchingOptionInputTemplate from "../../domain/matchingOption/components/templates/MatchingOptionInputTemplate";
import { GetServerSideProps } from "next";
import { wrapper } from "../../store/configStore";
import axios from "axios";
import cookies from "next-cookies";
import { COOKIE } from "../../domain/global/constants/cookie";
import MatchingOptionService from "../../api/matching/MatchingOptionService";
import { ROUTER_PATH } from "../../const/ROUTER_PATH";

const Header = styled.div`
  border: 1px solid ${palette.gray_1};
  text-align: center;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 500;

  & > span {
    float: left;
    cursor: pointer;
  }
`;
const Index = () => {
  const router = useRouter();

  return (
    <div>
      <Header>
        <span onClick={() => router.back()}>←</span>
        회원가입
      </Header>
      <MatchingOptionInputTemplate districts={[]} genders={[]} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    axios.defaults.headers["Cookie"] = context.req.headers.cookie;

    const allCookies = cookies(context);
    const refreshTokenByCookie = allCookies[COOKIE.REFRESH_TOKEN];

    if (refreshTokenByCookie) {
      const matchingOption = await MatchingOptionService.getMyMatchingOption();
      if (matchingOption.data.data.exist) {
        return {
          redirect: {
            permanent: false,
            destination: ROUTER_PATH.HOME,
          },
          props: {},
        };
      }
    }

    return {
      props: {},
    };
  },
);

export default Index;
