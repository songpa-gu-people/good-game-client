import React from "react";
import Footer from "../organisms/Footer";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-rows: 12.5fr 1fr;
  grid-gap: 1rem;
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
