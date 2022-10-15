import React from "react";
import InputTopLabel from "../../../../common/components/atoms/inputs/InputTopLabel";
import styled from "@emotion/styled";
import SmallButton from "../../../../common/components/atoms/buttons/SmallButton";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  align-items: end;
`;
interface Props {}

const GuildSearchMol = ({}: Props) => {
  return (
    <Container>
      <InputTopLabel label={"길드 검색"} inputComponent={<input type="text" />} />
      <SubmitButtonWrapper>
        <SmallButton onClick={() => {}}>검색</SmallButton>
      </SubmitButtonWrapper>
    </Container>
  );
};

export default GuildSearchMol;
