import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Typography } from "../../ui/Typography";

const Container = styled.div`
  background: linear-gradient(135deg, #3245ed, #7e2ce7);
  display: flex;
  flex: 1;
`;

const ImageWrapper = styled.div`
  margin: 160px 15px 84px 0;
`;

const Content = styled.div`
  margin: 83px 861px 0 121px;
`;

const LeftContent = styled.div``;

const RightContent = styled.div``;

const MenuListIcon = styled.div``;

interface HomeEntrancePageProps {
  content?: string;
}

export const HomeEntrancePage = (props: HomeEntrancePageProps) => {
  return (
    <Container>
      <LeftContent>
        <Content>
          <Typography type="sub-header" color="white">
            Welcome to
          </Typography>
          <Typography type="header" color="white">
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
        <MenuListIcon></MenuListIcon>
      </RightContent>
    </Container>
  );
};
