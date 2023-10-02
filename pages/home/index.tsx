import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { HomeEntranceMobile } from "../../ui/HomeEntranceMobile";
import { HomeEntranceDesktop } from "../../ui/HomeEntranceDesktop";
import { MobileBreakpoint } from '../../ui/constants';

const DeviceBreakpoints = `(max-width: ${MobileBreakpoint}px)`;
export const HomeEntrancePage = () => {
  const isMobile = useMediaQuery({ query: DeviceBreakpoints });
  if (isMobile) {
    return <HomeEntranceMobile />;
  }
  return <HomeEntranceDesktop />;
};
