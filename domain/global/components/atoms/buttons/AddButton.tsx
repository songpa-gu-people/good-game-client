import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import styled from "@emotion/styled";
import palette from "../../../../../styles/palette";

const AddDistrictButton = styled.button`
  display: inline-flex;
  cursor: pointer;

  outline: none;
  background: none;
  border: none;

  font-size: 1.5rem;

  color: ${palette.blue_1};
`;

interface Props {
  onClick;
}

const AddButton = ({ onClick }: Props) => {
  return (
    <AddDistrictButton onClick={onClick}>
      <AiOutlinePlusSquare />
    </AddDistrictButton>
  );
};

export default AddButton;
