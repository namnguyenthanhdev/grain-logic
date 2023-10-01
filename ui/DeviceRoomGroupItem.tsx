import * as React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
import { colors, shadows } from "./colors";

export const GradientBorder = styled.div`
  .boxed {
    width: 64px;
    height: 64px;
    position: relative;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.3);
  }
  .boxed:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    margin: -2px;
    background-image: linear-gradient(
      to right,
      ${colors.white100},
      ${colors.white50}
    );
    border-radius: 32px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 204px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const SmallWidget = styled.div`
  width: 176px;
  height: 176px;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  border-radius: 24px;
  border: 2px solid ${colors.white100};
  background: ${colors.gray80};
  box-shadow: 0 8px 16px 0 ${colors.gray16};
  backdrop-filter: blur(40px);
`;

const IconItem = styled.div`
  display: flex;
  align-items: flex-start;
  width: 64px;
  height: 64px;
  border-radius: 50%;
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
  background: ${colors.gray80};

  svg {
    width: 40px;
    height: 40px;
    path {
      fill: ${colors.white100};
    }
  }
`;

interface DeviceRoomGroupItemProps {
  content: string;
  onClick?: () => void;
  icons: React.ReactNode[];
}

export const DeviceRoomGroupItem = (props: DeviceRoomGroupItemProps) => {
  const { content, icons, onClick } = props;
  return (
    <Container>
      <SmallWidget>
        {icons?.map((icon, index) => {
          return (
            <IconItem key={index}>
              <Status onClick={onClick}>{icon}</Status>
            </IconItem>
          );
        })}
      </SmallWidget>
      <Typography type="label" color={colors.white100}>
        {content}
      </Typography>
    </Container>
  );
};
