import React from "react";
import LoginTemplate from "../components/login/templates/LoginTemplate";
import { GetServerSideProps } from "next";

const Index = () => {
  return (
    <div>
      <LoginTemplate />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("ssr");
  return { props: {} };
};

export default Index;
