import React from "react";
import BaseTemplateWithFooter from "../../domain/common/components/templates/BaseTemplateWithFooter";
import GuildListPage from "../../domain/guild/list/components/pages/GuildListPage";

interface Props {}

const Index = ({}: Props) => {
  return (
    <BaseTemplateWithFooter>
      <GuildListPage />
    </BaseTemplateWithFooter>
  );
};

export default Index;
