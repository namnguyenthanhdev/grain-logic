import * as React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
import { colors, shadows } from "./colors";
import cl from "classnames";

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

  &:hover {
    background: ${colors.gray30};
  }

  &:active {
    background: ${colors.gray50};
  }

  &.disabled {
    background: ${colors.black16};
    cursor: not-allowed;
    .status {
      background: ${colors.gray8};
      border: 0;
    }
    path {
      fill: ${colors.white50};
    }
  }
`;

const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid ${colors.white100};
  background: ${colors.gray50};

  svg {
    width: 80px;
    height: 80px;
    path {
      fill: ${colors.white100};
    }
  }
`;

export interface DeviceRoomSingleItemProps {
  content: string;
  icon: React.ReactNode;
  disabled?: boolean;
}
export const DeviceRoomSingleItem = (props: DeviceRoomSingleItemProps) => {
  const { content, icon, disabled } = props;
  return (
    <Container>
      <SmallWidget className={cl("widget", { disabled })}>
        <Status className="status">{icon}</Status>
      </SmallWidget>
      <Typography
        className="device-room-label"
        type="label"
        color={disabled ? colors.white50 : colors.white100}
      >
        {content}
      </Typography>
    </Container>
  );
};
