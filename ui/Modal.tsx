import styled from "styled-components";
import cl from "classnames";
import { colors, shadows } from "./colors";
import { Typography } from "./Typography";
import * as React from "react";
import { LAYER, MobileBreakpoint } from './constants';

const Container = styled.div`
  position: fixed;
  z-index: ${LAYER.LAYER5};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.gray8};
  backdrop-filter: blur(30px);

  display: flex;
  flex-direction: column;
  align-items: center;
  
  .modal-header {
    display: flex;
    justify-content: center;
  }

  .modal-main {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .modal-body {
    border-radius: 80px;
    border: 2px solid ${colors.white100};
    background: ${colors.gray40};
    box-shadow: ${shadows.shadow1};
    backdrop-filter: blur(40px);
    width: 1320px;
    padding: 64px;

    @media (max-width: ${MobileBreakpoint}px) {
      width: 500px;
      padding: 32px;
    }
  }

  &.display-block {
    display: block;
  }

  &.display-none {
    display: none;
  }
`;

interface ModalContentProps {
  title: string;
  content: React.ReactNode;
}

interface ModalProps {
  show: boolean;
  handleClose: () => void;
  body: ModalContentProps;
}
export const Modal = (props: ModalProps) => {
  const { handleClose, show, body } = props;
  return (
    <Container
      onClick={handleClose}
      className={cl(`display-${show ? "block" : "none"}`)}
    >
      <section className="modal-main">
        <Typography className="modal-header" type="title" color={colors.white100}>
          {body?.title}
        </Typography>
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          {body?.content}
        </div>
      </section>
    </Container>
  );
};
