import React from "react";
import styled from "@emotion/styled";
import BackIcon from "../atoms/svgs/BackIcon";
import { useRouter } from "next/router";

const BackIconWrapper = styled.div`
  height: 2rem;
  margin: auto;
`;

interface Props {}

const BackButton = ({}: Props) => {
  const router = useRouter();

  return (
    <BackIconWrapper>
      <BackIcon onClick={() => router.back()} />
    </BackIconWrapper>
  );
};

export default BackButton;
