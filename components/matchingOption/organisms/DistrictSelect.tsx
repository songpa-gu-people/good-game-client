import React, { useState } from "react";
import District from "../../../enum/District";
import styled from "@emotion/styled";
import SubmitLargeButton from "../../global/atoms/buttons/SubmitLargeButton";
import Flex from "../../global/atoms/wrapper/Flex";

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
  completeSelect: (selected: District[]) => void;
}

const DistrictSelect = ({ selected, completeSelect }: Props) => {
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
        <SubmitLargeButton
          buttonText={"저장"}
          onClick={() => completeSelect(tempSelected)}
        />
      </SubmitWrapper>
    </Container>
  );
};

export default DistrictSelect;
