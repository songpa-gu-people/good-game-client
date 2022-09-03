import React, { useState } from "react";
import District from "../../enum/District";
import { AiOutlinePlusSquare } from "react-icons/ai";
import styled from "@emotion/styled";
import palette from "../../../../styles/palette";
import ModalTemplate from "../../../global/components/templates/ModalTemplate";
import DistrictSelect from "../organisms/DistrictSelect";

const SelectedDistrictWrapper = styled.div``;

const AddDistrictButton = styled.button`
  display: flex;
  cursor: pointer;

  outline: none;
  background: none;
  border: none;

  font-size: 1.5rem;

  color: ${palette.blue_1};
`;

const DistrictSelectTemplate = () => {
  const [districts, setDistricts] = useState<District[]>([]);

  const [onModal, setOnModal] = useState(false);

  return (
    <div>
      <SelectedDistrictWrapper>
        {districts.map((district) => {
          return <div>{district._name}</div>;
        })}
      </SelectedDistrictWrapper>
      <AddDistrictButton onClick={() => setOnModal(true)}>
        <AiOutlinePlusSquare />
      </AddDistrictButton>
      {onModal && (
        <ModalTemplate closeModal={() => setOnModal(false)}>
          <DistrictSelect
            selected={districts}
            completeSelect={(selectedDistricts) => {
              setOnModal(false);
              setDistricts(selectedDistricts);
            }}
          />
        </ModalTemplate>
      )}
    </div>
  );
};

export default DistrictSelectTemplate;
