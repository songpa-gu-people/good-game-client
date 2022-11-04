import React, { useRef } from "react";
import { GuildFindContent } from "../../../../../api/guild/types";
import GuildListItem from "../molecules/GuildListItem";

interface Props {
  guildResponses: GuildFindContent[];
}

const GuildListOrg = ({ guildResponses }: Props) => {
  return (
    <div>
      {guildResponses.map((guild) => (
        <GuildListItem key={guild.guildId} guild={guild} />
      ))}
    </div>
  );
};

export default GuildListOrg;
