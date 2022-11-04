/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css, keyframes } from "@emotion/react";
import { VscLoading } from "react-icons/vsc";
import React from "react";

const spin = keyframes`
  0% {
    transform: rotateZ(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotateZ(180deg);
  }
`;

const container = css`
  width: inherit;
  height: 100%;

  svg {
    display: flex;
    margin: auto;
    height: 100%;
    transition: all 1s ease-out;
    animation: ${spin} 2s infinite;
    color: var(--main-color-blue);
  }
`;

interface Props {
  color?;
}

const Loading = ({ color }: Props) => {
  return (
    <div css={container}>
      <VscLoading color={color} />
    </div>
  );
};

export default Loading;
