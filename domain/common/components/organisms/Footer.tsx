import React from "react";
import FooterItem from "../molecules/FooterItem";
import styled from "@emotion/styled";
import { AiOutlineHome } from "react-icons/ai";
import palette from "../../../../styles/palette";
import { VscAccount } from "react-icons/vsc";
import { RiWechatLine } from "react-icons/ri";
import HomeIcon from "../atoms/svgs/HomeIcon";
import ChatIcon from "../atoms/svgs/ChatIcon";
import UserIcon from "../atoms/svgs/UserIcon";
import GroupIcon from "../atoms/svgs/GroupIcon";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, auto));
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  border-top: 1px solid ${palette.gray_1};
`;

const Footer = () => {
  return (
    <Container>
      <FooterItem href={"/"} icon={<HomeIcon />} name={"홈"} />
      <FooterItem href={"/guild"} icon={<GroupIcon />} name={"길드"} />
      <FooterItem href={"/chat"} icon={<ChatIcon />} name={"채팅"} />
      <FooterItem href={"/account"} icon={<UserIcon />} name={"내정보"} />
    </Container>
  );
};

export default Footer;
