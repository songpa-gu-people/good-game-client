import React from "react";
import BasicHeader from "../../../../common/components/organisms/BasicHeader";
import styled from "@emotion/styled";
import GuildCreateForm from "../organisms/GuildCreateForm";
import { useForm } from "react-hook-form";
import { GuildCreateRequest } from "../../../../../api/guild/types";
import SubmitLargeButton from "../../../../common/components/atoms/buttons/SubmitLargeButton";
import GuildService from "../../../../../api/guild/GuildService";

const Container = styled.div`
  position: relative;
  height: 100%;
  box-sizing: border-box;
`;

const BodyWrapper = styled.div`
  box-sizing: border-box;
  height: auto;
`;

const FormWrapper = styled.div`
  padding: 2rem 1rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 1rem;
  box-sizing: border-box;
`;

interface Props {}

const GuildCreateTemplate = ({}: Props) => {
  const guildCreateRequestForm = useForm<GuildCreateRequest>();

  const { handleSubmit } = guildCreateRequestForm;

  async function submit(data) {
    try {
      await GuildService.createGuild(data);
      alert("가입완료");
    } catch (e) {}
  }

  return (
    <Container>
      <BasicHeader title={"길드 생성"} />
      <BodyWrapper>
        <FormWrapper>
          <GuildCreateForm guildCreateRequestForm={guildCreateRequestForm} />
        </FormWrapper>
        <ButtonWrapper>
          <SubmitLargeButton buttonText={"저장"} onClick={handleSubmit(submit)} />
        </ButtonWrapper>
      </BodyWrapper>
    </Container>
  );
};

export default GuildCreateTemplate;
