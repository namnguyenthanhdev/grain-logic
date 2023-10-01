import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
	
`;
export const Modal = (props) => {
  const { setIsOpen, children } = props;
  return (
    <Container onClick={() => setIsOpen(false)}>
      {children}
    </Container>
  );
};
