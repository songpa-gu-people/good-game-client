import React from "react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";
import { useRouter } from "next/router";
import MatchingOptionInputTemplate from "../../components/matchingOption/templates/MatchingOptionInputTemplate";

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
      <MatchingOptionInputTemplate />
    </div>
  );
};

export default Index;
