import React from "react";
import { HeaderContainer } from "../../styled/HeaderContainer";
import BackIcon from "../atoms/svgs/BackIcon";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import BackButton from "../molecules/BackButton";
import palette from "../../../../styles/palette";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3rem auto;

  height: 100%;
`;

const InputWrapper = styled.div`
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  padding-right: 1rem;

  & > input {
    box-sizing: border-box;

    border: none;
    outline: none;
    border-radius: 0.3rem;
    background: ${palette.gray_1};

    width: 100%;
    padding: 0.5rem;
  }
`;

interface Props {
  placeHolder;
  onSubmit;
}

const HeaderWithSearch = ({ placeHolder, onSubmit }: Props) => {
  return (
    <HeaderContainer>
      <Wrapper>
        <BackButton />
        <InputWrapper>
          <input type="text" placeholder={placeHolder} onClick={onSubmit} />
        </InputWrapper>
      </Wrapper>
    </HeaderContainer>
  );
};

export default HeaderWithSearch;
