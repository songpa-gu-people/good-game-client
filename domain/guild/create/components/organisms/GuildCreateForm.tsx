import React from "react";
import { UseFormReturn } from "react-hook-form/dist/types";
import { GuildCreateRequest } from "../../../../../api/guild/types";
import InputTitle from "../../../../common/components/atoms/InputTitle";
import InputTopLabel from "../../../../common/components/atoms/inputs/InputTopLabel";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0.5rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface Props {
  guildCreateRequestForm: UseFormReturn<GuildCreateRequest>;
}

const GuildCreateForm = ({ guildCreateRequestForm }: Props) => {
  const { watch, register } = guildCreateRequestForm;

  return (
    <Container>
      <InputTitle title={"길드 이름을 입력해주세요."} />
      <InputTopLabel
        label={"길드 이름"}
        inputComponent={<input type="text" {...register("guildName")} />}
      />
    </Container>
  );
};

export default GuildCreateForm;
