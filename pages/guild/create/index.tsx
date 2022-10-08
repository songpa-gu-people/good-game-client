import React from "react";
import GuildCreateTemplate from "../../../domain/guild/create/components/templates/GuildCreateTemplate";
import BaseTemplateWithFooter from "../../../domain/common/components/templates/BaseTemplateWithFooter";

interface Props {}

const Index = ({}: Props) => {
  return (
    <BaseTemplateWithFooter>
      <GuildCreateTemplate />
    </BaseTemplateWithFooter>
  );
};

export default Index;
