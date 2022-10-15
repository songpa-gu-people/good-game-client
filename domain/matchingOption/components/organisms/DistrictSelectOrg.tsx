import React, { useState } from "react";
import District from "../../enum/District";
import styled from "@emotion/styled";
import LargeButton from "../../../common/components/atoms/buttons/LargeButton";
import Flex from "../../../common/components/atoms/wrapper/Flex";

const Container = styled.div`
  padding: 1rem;
  width: 80vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SelectedDistrictWrapper = styled.div`
  padding: 1rem 0;
  & > div:nth-of-type(1) {
    font-size: 1.2rem;
  }
`;

const SelectedDistricts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  & > div {
    white-space: nowrap;
  }
`;

const ChoiceWrapper = styled.div`
  max-height: 50vh;
  overflow-y: auto;
`;

const SubmitWrapper = styled.div`
  margin: 1rem 0.5rem;
`;

interface Props {
  selected: District[];
  submitSelect: (selected: District[]) => void;
}

const DistrictSelectOrg = ({ selected, submitSelect }: Props) => {
  const [tempSelected, setTempSelected] = useState<District[]>(selected);

  const nonSelected = (): District[] => {
    return District.values().filter((d) => !tempSelected.includes(d));
  };

  return (
    <Container>
      <Flex flexDirection={"column"} gap={"1rem"}>
        <SelectedDistrictWrapper>
          <div>선택된 구</div>
          <SelectedDistricts>
            {tempSelected
              .sort((o1, o2) => o1._name.localeCompare(o2._name))
              .map((district) => (
                <div
                  key={district._districtType}
                  onClick={() =>
                    setTempSelected((prevState) => {
                      return prevState.filter((pre) => pre != district);
                    })
                  }
                >
                  {district._name}
                </div>
              ))}
          </SelectedDistricts>
        </SelectedDistrictWrapper>
        <ChoiceWrapper>
          {nonSelected().map((district) => (
            <div
              key={district._districtType}
              onClick={() =>
                setTempSelected((prevState) => {
                  return [...prevState, district];
                })
              }
            >
              {district._name}
            </div>
          ))}
        </ChoiceWrapper>
      </Flex>

      <SubmitWrapper>
        <LargeButton onClick={() => submitSelect(tempSelected)}>저장</LargeButton>
      </SubmitWrapper>
    </Container>
  );
};

export default DistrictSelectOrg;
