import styled from "styled-components";
import cl from "classnames";
import { colors, shadows } from "./colors";

const Container = styled.div`
  &.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.gray8};
    backdrop-filter: blur(30px);
  }

  .modal-main {
    position: fixed;
    border-radius: 80px;
    border: 2px solid ${colors.white100};
    background: ${colors.gray40};
    box-shadow: ${shadows.shadow1};
    backdrop-filter: blur(40px);
    width: 1320px;
    height: 360px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.display-block {
    display: block;
  }

  &.display-none {
    display: none;
  }
`;

export const Modal = ({ handleClose, show, children }) => {
  return (
    <Container
      onClick={handleClose}
      className={cl("modal", `display-${show ? "block" : "none"}`)}
    >
      <section className="modal-main" onClick={(e) => e.stopPropagation()}>
        {children}
      </section>
    </Container>
  );
};
