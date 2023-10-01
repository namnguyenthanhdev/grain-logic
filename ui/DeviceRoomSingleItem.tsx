import * as React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
import { colors, shadows } from './colors';

const Container = styled.div`
  display: flex;
  width: 204px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const SmallWidget = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 176px;
  aspect-ratio: 1;

  border-radius: 100px;

  background: ${colors.gray8};
  box-shadow: ${shadows.shadow1};
  backdrop-filter: blur(40px);
`;

const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  background: ${colors.gray50};

  svg {
    width: 80px;
    height: 80px;
    path {
      fill: #ffffff;
    }
  }
`;

export interface DeviceRoomSingleItemProps {
  content: string;
  icon: React.ReactNode;
}
export const DeviceRoomSingleItem = (props: DeviceRoomSingleItemProps) => {
  const { content, icon } = props;
  return (
    <Container>
      <SmallWidget>
        <Status>{icon}</Status>
      </SmallWidget>
      <Typography type="label" color={colors.white100}>{content}</Typography>
    </Container>
  );
};
