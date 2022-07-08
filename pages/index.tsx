import React from "react";
import { useRecoilValue } from "recoil";
import memberState from "../states/member/memberState";
import LoginTemplate from "../components/templates/LoginTemplate";

const Index = () => {
  let member = useRecoilValue(memberState);
  return <LoginTemplate />;
};

export default Index;
