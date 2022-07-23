import React from "react";
import Footer from "../../organism/Footer";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-rows: 12.5fr 1fr;

  height: 100vh;

  & > div:nth-of-type(1) {
    height: 100%;
    overflow-y: auto;
  }
`;

const BaseTemplateWithFooter = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </Container>
  );
};

export default BaseTemplateWithFooter;
