import React from "react";
import Footer from "../../domain/global/components/organisms/Footer";
import styled from "@emotion/styled";
import BaseTemplateWithFooter from "../../domain/global/components/templates/BaseTemplateWithFooter";
import HomeTemplate from "../../domain/home/components/templates/HomeTemplate";

const Index = () => {
  return (
    <BaseTemplateWithFooter>
      <HomeTemplate />
    </BaseTemplateWithFooter>
  );
};

export default Index;
