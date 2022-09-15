import React from "react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";
import { useRouter } from "next/router";
import MatchingOptionInputTemplate from "../../domain/matchingOption/components/templates/MatchingOptionInputTemplate";
import { GetServerSideProps } from "next";
import { wrapper } from "../../store/configStore";
import axios from "axios";

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

    return {
      props: {},
    };
  },
);

export default Index;
