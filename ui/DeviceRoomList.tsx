import * as React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";

const Container = styled.div``;

const SmallWidget = styled.div``;

const Status = styled.div``;

interface DeviceRoomItemProps {
  type?: "group" | "single";
  content: string;
  icon: React.ReactNode;
}

export const DeviceRoomItem = (props: DeviceRoomItemProps) => {
  const { type, content, icon } = props;

  return (
    <Container>
      <SmallWidget>
        <Status></Status>
      </SmallWidget>
      <Typography>{content}</Typography>
    </Container>
  );
};
