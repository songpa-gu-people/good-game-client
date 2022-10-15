import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DistrictSelectModalAndTriggerButton from "../molecules/DistrictSelectModalAndTriggerButton";
import Flex from "../../../common/components/atoms/wrapper/Flex";
import District from "../../enum/District";
import GenderSelectOrg from "../organisms/GenderSelectOrg";
import Gender from "../../enum/Gender";
import MatchingOptionService from "../../../../api/matching/MatchingOptionService";
import LargeButton from "../../../common/components/atoms/buttons/LargeButton";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { MatchingOptionSaveOrUpdateRequest } from "../../../../api/matching/types";

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

interface IMatchingOptionForm {
  districts: District[];
  genders: Gender[];
}

interface Props {
  districts: District[];
  genders: Gender[];
}

const MatchingOptionInputTemplate = ({ districts, genders }: Props) => {
  const router = useRouter();
  const { watch, setValue } = useForm<IMatchingOptionForm>({
    defaultValues: {
      districts: districts,
      genders: genders,
    },
  });

  const selectedDistricts = watch("districts");
  const selectedGenders = watch("genders");

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
              setSelectedDistricts={(districts) => setValue("districts", districts)}
            />
          </Flex>
          <SelectedDistrictWrapper>
            {selectedDistricts.map((district) => {
              return <div key={district._districtType}>{district._name}</div>;
            })}
          </SelectedDistrictWrapper>
        </div>
        <div>
          <FormTitle>누구와</FormTitle>
          <GenderSelectOrg
            selected={selectedGenders}
            setSelectedGenders={(genders) => setValue("genders", genders)}
          />
        </div>
      </FormWrapper>
      <LargeButton onClick={saveMyMatchingOption}>저장</LargeButton>
    </Container>
  );
};

export default MatchingOptionInputTemplate;
