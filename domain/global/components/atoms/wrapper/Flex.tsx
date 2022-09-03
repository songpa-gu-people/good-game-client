import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Props {
  children: any;
  flexDirection?: "row" | "column";
  gap?;
  justifyContent?:
    | "space-between"
    | "right"
    | "left"
    | "center"
    | "flex-start"
    | "flex-end";
  alignContent?: "center";
}

interface FlexProps {
  flexDirection?;
  gap?;
  justifyContent?;
  alignContent?;
}

const Container = styled.div<FlexProps>`
  display: flex;

  ${(props) =>
    css`
      flex-direction: ${props.flexDirection};
      gap: ${props.gap ? props.gap : "normal"};
      justify-content: ${props.justifyContent
        ? props.justifyContent
        : "normal"};
    `}
`;

const Flex = ({
  children,
  flexDirection,
  gap,
  justifyContent,
  alignContent,
}: Props) => {
  return (
    <Container
      flexDirection={flexDirection}
      gap={gap}
      justifyContent={justifyContent}
      alignContent={alignContent}
    >
      {children}
    </Container>
  );
};

export default Flex;
