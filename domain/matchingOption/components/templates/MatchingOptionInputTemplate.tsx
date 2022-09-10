import React, { useState } from "react";
import styled from "@emotion/styled";
import DistrictSelectModalAndTriggerButton from "../molecules/DistrictSelectModalAndTriggerButton";
import Flex from "../../../global/components/atoms/wrapper/Flex";
import District from "../../enum/District";
import GenderSelectOrg from "../organisms/GenderSelectOrg";
import Gender from "../../enum/Gender";
import MatchingOptionService from "../../../../api/matching/MatchingOptionService";
import SubmitLargeButton from "../../../global/components/atoms/buttons/SubmitLargeButton";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 3rem;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  align-items: center;
  align-content: center;
`;

const SelectedDistrictWrapper = styled.div``;

interface Props {
  districts: District[];
  genders: Gender[];
}

const MatchingOptionInputTemplate = ({ districts, genders }: Props) => {
  const router = useRouter();
  const [selectedDistricts, setSelectedDistricts] =
    useState<District[]>(districts);

  const [selectedGenders, setSelectedGenders] = useState<Gender[]>(genders);

  async function saveMyMatchingOption() {
    try {
      await MatchingOptionService.saveMyMatchingOption({
        districts: selectedDistricts.map((district) => district._districtType),
        genders: selectedGenders.map((gender) => gender._genderType),
      });
      router.push("/");
    } catch (e) {}
  }

  return (
    <Container>
      <Title>
        매칭 상대를 찾기 위한 정보를 <br />
        입력해주세요.
      </Title>
      <FormWrapper>
        <div>
          <Flex>
            <FormTitle>어디에서</FormTitle>
            <DistrictSelectModalAndTriggerButton
              selectedDistricts={selectedDistricts}
              setSelectedDistricts={setSelectedDistricts}
            />
          </Flex>
          <SelectedDistrictWrapper>
            {selectedDistricts.map((district) => {
              return <div>{district._name}</div>;
            })}
          </SelectedDistrictWrapper>
        </div>
        <div>
          <FormTitle>누구와</FormTitle>
          <GenderSelectOrg
            selected={selectedGenders}
            setSelectedGenders={setSelectedGenders}
          />
        </div>
      </FormWrapper>
      <SubmitLargeButton buttonText={"저장"} onClick={saveMyMatchingOption} />
    </Container>
  );
};

export default MatchingOptionInputTemplate;
