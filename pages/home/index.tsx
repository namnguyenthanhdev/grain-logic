import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Typography } from "../../ui/Typography";
import {
  Additem,
  Box,
  Building,
  ChartSquare,
  Data,
  FavoriteChart,
  InfoCircle,
  LoginCurve,
  LogoutCurve,
  People,
  ShoppingCart,
  TicketDiscount,
} from "iconsax-react";
import { DeviceRoomSingleItem } from "../../ui/DeviceRoomSingleItem";
import { DeviceRoomGroupItem } from "../../ui/DeviceRoomGroupItem";
import { colors } from "../../ui/colors";

const Container = styled.div`
  background: linear-gradient(135deg, ${colors.blue100}, ${colors.purple100});
  display: flex;
  gap: 32px;
`;

const ImageWrapper = styled.div`
  margin: 160px 15px 84px 64px;
`;

const Content = styled.div`
  margin: 83px 861px 0 121px;
  .sub-header {
    width: 300px;
  }
`;

const LeftContent = styled.div`
  width: 50%;
`;

const RightContent = styled.div`
  padding-top: 198px;
  width: 50%;
`;

const MenuListIcon = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 32px;
`;

interface HomeEntrancePageProps {
  content?: string;
}

export const HomeEntrancePage = (props: HomeEntrancePageProps) => {
  return (
    <Container>
      <LeftContent>
        <Content>
          <Typography
            className="sub-header"
            type="sub-header"
            color={colors.white100}
          >
            Welcome to
          </Typography>
          <Typography type="header" color={colors.white100}>
            GrainLogic!
          </Typography>
        </Content>
        <ImageWrapper>
          <Image
            src="/img.png"
            width={694}
            height={540}
            alt="Image"
            objectFit="contain"
          />
        </ImageWrapper>
      </LeftContent>
      <RightContent>
        <MenuListIcon>
          <DeviceRoomGroupItem
            content="Explore"
            icons={[<Box variant="Bold" />, <Building variant="Bold" />]}
          />
          <DeviceRoomGroupItem
            content="Profiles"
            icons={[
              <Additem variant="Bold" />,
              <InfoCircle variant="Bold" />,
              <FavoriteChart variant="Bold" />,
              <People variant="Bold" />,
            ]}
          />
          <DeviceRoomGroupItem
            content="Store"
            icons={[
              <ShoppingCart variant="Bold" />,
              <ChartSquare variant="Bold" />,
              <TicketDiscount variant="Bold" />,
            ]}
          />
          <DeviceRoomSingleItem
            content="Developer"
            icon={<Data variant="Bold" />}
          />
          <DeviceRoomSingleItem
            content="Message"
            icon={<LoginCurve variant="Bold" />}
          />
          <DeviceRoomSingleItem
            content="Log out"
            icon={<LogoutCurve variant="Bold" />}
          />
        </MenuListIcon>
      </RightContent>
    </Container>
  );
};
