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
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../constants/routerPath";

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
  const router = useRouter();

  function getColorByPath(pathName): string {
    if (router.pathname === pathName) {
      return palette.blue_2;
    }
    return "#333";
  }

  return (
    <Container>
      <FooterItem
        href={ROUTER_PATH.INDEX}
        icon={<HomeIcon color={getColorByPath(ROUTER_PATH.INDEX)} />}
        name={"홈"}
      />
      <FooterItem
        href={ROUTER_PATH.GUILD}
        icon={<GroupIcon color={getColorByPath(ROUTER_PATH.GUILD)} />}
        name={"길드"}
      />
      <FooterItem
        href={ROUTER_PATH.CHAT}
        icon={<ChatIcon color={getColorByPath(ROUTER_PATH.CHAT)} />}
        name={"채팅"}
      />
      <FooterItem
        href={ROUTER_PATH.ACCOUNT}
        icon={<UserIcon color={getColorByPath(ROUTER_PATH.ACCOUNT)} />}
        name={"내정보"}
      />
    </Container>
  );
};

export default Footer;
