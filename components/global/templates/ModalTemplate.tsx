import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  background: #ffffff;
  z-index: 11;
  transform: translate(-50%, -50%);
  border-radius: 0.4rem;
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #00000082;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  children;
  closeModal;
}

const ModalTemplate = ({ children, closeModal }: Props) => {
  return (
    <div>
      <Container>{children}</Container>
      <Background onClick={closeModal} />
    </div>
  );
};

export default ModalTemplate;
