import React from "react";
import { GuildResponse } from "../../../../../api/guild/types";
import GuildListItem from "../molecules/GuildListItem";

interface Props {
  guildResponses: GuildResponse[];
}

const GuildListOrg = ({ guildResponses }: Props) => {
  return (
    <div>
      {guildResponses.map((guild) => (
        <GuildListItem guild={guild} />
      ))}
    </div>
  );
};

export default GuildListOrg;
