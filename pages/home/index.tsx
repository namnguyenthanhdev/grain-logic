import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { HomeEntranceMobile } from "../../ui/HomeEntranceMobile";
import { HomeEntranceDesktop } from "../../ui/HomeEntranceDesktop";

const DeviceBreakpoints = "(max-width: 390px)";
export const HomeEntrancePage = () => {
  const isMobile = useMediaQuery({ query: DeviceBreakpoints });
  if (isMobile) {
    return <HomeEntranceMobile />;
  }
  return <HomeEntranceDesktop />;
};
