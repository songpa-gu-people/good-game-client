import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import palette from "../../../../../styles/palette";

const Container = styled.div`
  display: grid;
  grid-template-rows: 0.9fr 1.8fr;
  padding: 0.2rem 0.3rem;
  box-sizing: border-box;
  border-bottom: 1px solid ${palette.gray_1};
  border-radius: 0.2rem;
`;

const Label = styled.span`
  font-size: 0.85rem;
  color: ${palette.gray_5};
  margin-bottom: 0.1rem;
`;

const InputWrapper = styled.div`
  width: 100%;

  & > input {
    font-size: 1rem;
  }

  & > input,
  select {
    width: 100%;
    height: 100%;
    outline: none;
    padding-left: 0.5rem;
    border: none;
    box-sizing: border-box;
    border-radius: 8px 0 0 0;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
  }
`;

interface Props {
  label: string;
  inputComponent: JSX.Element;
}

const InputTopLabel = ({ label, inputComponent }: Props) => {
  const inputWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    const htmlInputElement = inputWrapper.current.querySelector("input");
    if (htmlInputElement) {
      htmlInputElement.addEventListener("wheel", (e) => {
        // @ts-ignore
        const event: WheelEvent<HTMLInputElement> = e;
        event.currentTarget.blur();
      });
    }
  }, [inputWrapper]);

  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper ref={inputWrapper}>{inputComponent}</InputWrapper>
    </Container>
  );
};

export default InputTopLabel;
