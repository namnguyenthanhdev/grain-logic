import * as React from "react";
import Image from "next/image";
import styled from "styled-components";
import { LAYER } from './constants';

const ImageWrapper = styled.div`
  margin: 160px 15px 84px 64px;
  position: relative;
  width: 1000px;
  height: 600px;
  .under-layout {
    position: absolute;
    z-index:  ${LAYER.LAYER1};
  }
  .main-layout {
    position: absolute;
    z-index: ${LAYER.LAYER2};;
  }
`;

export const GrainLogicImage = () => {
  return (
    <ImageWrapper>
      <Image
        className="under-layout"
        src="/group.png"
        width={694}
        height={540}
        alt="Image"
        objectFit="contain"
      />
      <Image
        className="main-layout"
        src="/img.png"
        width={694}
        height={540}
        alt="Image"
        objectFit="contain"
      />
    </ImageWrapper>
  );
};
