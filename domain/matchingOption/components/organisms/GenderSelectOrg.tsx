import React, { Dispatch, SetStateAction, useState } from "react";
import Gender, { GenderType } from "../../enum/Gender";
import styled from "@emotion/styled";
import palette from "../../../../styles/palette";
import Flex from "../../../common/components/atoms/wrapper/Flex";
import { css } from "@emotion/react";

const Container = styled.div``;

const Button = styled.button<{ isContains: boolean }>`
  ${(props) =>
    props.isContains
      ? css`
          border: 1px solid ${palette.blue_1};
          background: ${palette.blue_1};
          color: whitesmoke;
        `
      : css`
          border: 1px solid ${palette.blue_1};
          background: none;
        `}

  outline: none;
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

interface Props {
  selected: Gender[];
  setSelectedGenders: (genders: Gender[]) => void;
}

const GenderSelectOrg = ({ selected, setSelectedGenders }: Props) => {
  function toggleSelectGender(value: Gender) {
    if (selected.includes(value)) {
      setSelectedGenders(selected.filter((gender) => gender !== value));
      return;
    }
    setSelectedGenders([...selected, value]);
  }

  return (
    <Container>
      <Flex gap={"0.5rem"}>
        {Gender.values().map((gender) => (
          <Button
            key={gender._genderType}
            onClick={() => toggleSelectGender(gender)}
            isContains={selected.includes(gender)}
          >
            {gender._name}
          </Button>
        ))}
      </Flex>
    </Container>
  );
};

export default GenderSelectOrg;
