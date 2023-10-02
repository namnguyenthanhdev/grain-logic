import * as React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
import { colors, shadows } from "./colors";
import cl from "classnames";
import { MobileBreakpoint } from "./constants";

const Container = styled.div`
  display: flex;
  width: 204px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media (max-width: ${MobileBreakpoint}px) {
    width: 300px;
  }
`;

const SmallWidget = styled.div`
  width: 176px;
  aspect-ratio: 1;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  border-radius: 24px;

  @media (max-width: ${MobileBreakpoint}px) {
    width: 250px;
    border-radius: 30px;
  }

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

  svg {
    width: 40px;
    height: 40px;
    @media (max-width: ${MobileBreakpoint}px) {
      width: 64px;
      height: 64px;
    }
    path {
      fill: ${colors.white100};
    }
  }
`;

const IconItem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 64px;
  aspect-ratio: 1;
  border-radius: 50%;

  @media (max-width: ${MobileBreakpoint}px) {
    width: 100px;
    border-radius: 30px;
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
  background: ${colors.gray30};
`;

interface DeviceRoomGroupItemProps {
  content: string;
  onClick?: () => void;
  icons: React.ReactNode[];
  disabled?: boolean;
}

export const DeviceRoomGroupItem = (props: DeviceRoomGroupItemProps) => {
  const { content, icons, onClick, disabled } = props;
  return (
    <Container onClick={onClick}>
      <SmallWidget className={cl("widget", { disabled })}>
        {icons?.map((icon, index) => {
          return (
            <IconItem key={index}>
              <Status onClick={onClick}>{icon}</Status>
            </IconItem>
          );
        })}
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
