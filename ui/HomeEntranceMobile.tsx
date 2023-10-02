import * as React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";
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
import { DeviceRoomSingleItem } from "./DeviceRoomSingleItem";
import { DeviceRoomGroupItem } from "./DeviceRoomGroupItem";
import { colors } from "./colors";
import { Modal } from "./Modal";
import { GrainLogicImage } from "./GrainLogicImage";
import { ModalIds } from "./constants";
import { useModalContent } from "./useModalContent";

const Container = styled.div`
  background: linear-gradient(135deg, ${colors.blue100}, ${colors.purple100});
  //display: flex;
  //gap: 32px;
`;

const Content = styled.div`
  width: 100%;
  .sub-header {
    width: 300px;
  }
`;

const ImageLayout = styled.div`
  margin-top: 100px;
  width: 600px;
  height: 600px;
`;

const LeftContent = styled.div`
  //width: 50%;
`;

const RightContent = styled.div`
  //padding-top: 198px;
  //width: 50%;
`;

const MenuListIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const HomeEntranceMobile = () => {
  const [modalId, setModalId] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { modalContent } = useModalContent(modalId);

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
        <ImageLayout>
          <GrainLogicImage />
        </ImageLayout>
      </LeftContent>
      <RightContent>
        <MenuListIcon>
          <DeviceRoomGroupItem
            content="Explore"
            icons={[<Box variant="Bold" />, <Building variant="Bold" />]}
            onClick={() => {
              setOpen(true);
              setModalId(ModalIds.first);
            }}
          />
          <DeviceRoomGroupItem
            content="Profiles"
            icons={[
              <Additem variant="Bold" />,
              <InfoCircle variant="Bold" />,
              <FavoriteChart variant="Bold" />,
              <People variant="Bold" />,
            ]}
            onClick={() => {
              setOpen(true);
              setModalId(ModalIds.second);
            }}
          />
          <DeviceRoomGroupItem
            content="Store"
            icons={[
              <ShoppingCart variant="Bold" />,
              <ChartSquare variant="Bold" />,
              <TicketDiscount variant="Bold" />,
            ]}
            onClick={() => {
              setOpen(true);
              setModalId(ModalIds.third);
            }}
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
        <Modal
          show={open}
          handleClose={() => setOpen(false)}
          body={modalContent}
        />
      </RightContent>
    </Container>
  );
};
