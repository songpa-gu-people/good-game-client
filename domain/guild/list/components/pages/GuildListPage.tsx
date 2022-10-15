import React from "react";
import GuildListTemplate from "../templates/GuildListTemplate";
import GuildSearchHeader from "../molecules/GuildSearchHeader";

interface Props {}

const GuildListPage = ({}: Props) => {
  return (
    <div>
      <GuildSearchHeader />
      <GuildListTemplate />
    </div>
  );
};

export default GuildListPage;
