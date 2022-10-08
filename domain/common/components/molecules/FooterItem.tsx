import React from "react";
import styled from "@emotion/styled";
import palette from "../../../../styles/palette";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.5rem;
  
  & > a {
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 1.5rem;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  color: ${palette.black};
`;

interface Props {
  icon;
  name;
  href;
}

const FooterItem = ({ icon, name, href }: Props) => {
  return (
    <Container>
      <Link href={href} passHref>
        <a>
          <IconWrapper>{icon}</IconWrapper>
          <NameWrapper>{name}</NameWrapper>
        </a>
      </Link>
    </Container>
  );
};

export default FooterItem;
