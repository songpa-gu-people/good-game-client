import React from "react";
import styled from "@emotion/styled";
import DistrictSelectTemplate from "./DistrictSelectTemplate";

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

  & > div {
    & > div:nth-of-type(2) {
      padding: 0.5rem;
    }
  }
`;
const InputTitle = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 500;
`;

const MatchingOptionInputTemplate = () => {
  return (
    <Container>
      <Title>
        매칭 상대를 찾기 위한 정보를 <br />
        입력해주세요.
      </Title>
      <FormWrapper>
        <div>
          <InputTitle>어디에서</InputTitle>
          <div>
            <DistrictSelectTemplate />
          </div>
        </div>
        <div>
          <InputTitle>누구와</InputTitle>
          <div></div>
        </div>
      </FormWrapper>
    </Container>
  );
};

export default MatchingOptionInputTemplate;
