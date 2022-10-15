import React from "react";
import HeaderWithSearch from "../../../../common/components/organisms/HeaderWithSearch";

interface Props {}

const GuildSearchHeader = ({}: Props) => {
  return (
    <div>
      <HeaderWithSearch placeHolder={"길드 검색"} onSubmit={() => {}} />
    </div>
  );
};

export default GuildSearchHeader;
