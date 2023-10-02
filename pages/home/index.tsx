import * as React from "react";
import styled from "styled-components";
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
import { Modal } from "../../ui/Modal";
import { GrainLogicImage } from "../../ui/GrainLogicImage";

const ModalIds = {
  first: "first-modal",
  second: "second-modal",
  third: "third-modal",
};

const Container = styled.div`
  background: linear-gradient(135deg, ${colors.blue100}, ${colors.purple100});
  display: flex;
  gap: 32px;
`;

const Content = styled.div`
  margin: 83px 861px 0 121px;
  .sub-header {
    width: 300px;
  }
`;

const ImageLayout = styled.div`
  margin: 160px 15px 84px 0;
  width: 1000px;
  height: 600px;
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

const GroupWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;

  .device-room-label {
    width: max-content;
  }
`;

export const HomeEntrancePage = () => {
  const [modalId, setModalId] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const getModalBody = React.useCallback((id) => {
    switch (id) {
      case ModalIds.first:
        return {
          title: "Explore",
          content: (
            <GroupWrapper>
              <DeviceRoomSingleItem
                content="Product Category"
                icon={<Box variant="Bold" />}
              />
              <DeviceRoomSingleItem
                content="Company"
                icon={<Building variant="Bold" />}
              />
            </GroupWrapper>
          ),
        };
      case ModalIds.second:
        return {
          title: "Profiles",
          content: (
            <GroupWrapper>
              <DeviceRoomSingleItem
                content="Add Subscription"
                icon={<Additem variant="Bold" />}
              />
              <DeviceRoomSingleItem
                content="Public Information"
                icon={<InfoCircle variant="Bold" />}
              />
              <DeviceRoomSingleItem
                content="Business Information"
                icon={<FavoriteChart variant="Bold" />}
              />
              <DeviceRoomSingleItem
                content="Connection"
                icon={<People variant="Bold" />}
              />
            </GroupWrapper>
          ),
        };
      case ModalIds.third:
        return {
          title: "Store",
          content: (
            <GroupWrapper>
              <DeviceRoomSingleItem
                content="Online Shop"
                icon={<ShoppingCart variant="Bold" />}
              />
              <DeviceRoomSingleItem
                content="Product Dashboard"
                icon={<ChartSquare variant="Bold" />}
              />
              <DeviceRoomSingleItem
                content="Offer Dashboard"
                icon={<TicketDiscount variant="Bold" />}
              />
            </GroupWrapper>
          ),
        };
      default:
    }
  }, []);

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
          body={getModalBody(modalId)}
        />
      </RightContent>
    </Container>
  );
};
