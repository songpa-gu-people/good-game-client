import React from "react";
import Footer from "../../components/global/organisms/Footer";
import styled from "@emotion/styled";
import BaseTemplateWithFooter from "../../components/templates/global/BaseTemplateWithFooter";
import HomeTemplate from "../../components/templates/HomeTemplate";

const Index = () => {
  return (
    <BaseTemplateWithFooter>
      <HomeTemplate />
    </BaseTemplateWithFooter>
  );
};

export default Index;
