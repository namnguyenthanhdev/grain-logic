import * as React from "react";
import { ModalIds } from "./constants";
import { DeviceRoomSingleItem } from "./DeviceRoomSingleItem";
import {
  Additem,
  Box,
  Building,
  ChartSquare,
  FavoriteChart,
  InfoCircle,
  People,
  ShoppingCart,
  TicketDiscount,
} from "iconsax-react";
import styled from "styled-components";

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

export const useModalContent = (id) => {
  const modalContent = React.useMemo(() => {
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
  }, [id]);
  return { modalContent };
};
