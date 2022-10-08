import React, { Dispatch, SetStateAction, useState } from "react";
import District from "../../enum/District";
import { AiOutlinePlusSquare } from "react-icons/ai";
import styled from "@emotion/styled";
import palette from "../../../../styles/palette";
import ModalTemplate from "../../../common/components/templates/ModalTemplate";
import DistrictSelectOrg from "../organisms/DistrictSelectOrg";
import AddButton from "../../../common/components/atoms/buttons/AddButton";

interface Props {
  selectedDistricts: District[];
  setSelectedDistricts: (districts: District[]) => void;
}

const DistrictSelectModalAndTriggerButton = ({
  selectedDistricts,
  setSelectedDistricts,
}: Props) => {
  const [onModal, setOnModal] = useState(false);

  return (
    <div>
      <AddButton onClick={() => setOnModal(true)} />
      {onModal && (
        <ModalTemplate closeModal={() => setOnModal(false)}>
          <DistrictSelectOrg
            selected={selectedDistricts}
            submitSelect={(selectedDistricts) => {
              setOnModal(false);
              setSelectedDistricts(selectedDistricts);
            }}
          />
        </ModalTemplate>
      )}
    </div>
  );
};

export default DistrictSelectModalAndTriggerButton;
