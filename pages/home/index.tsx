import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  background: linear-gradient(to right, red, yellow);

  .image {
    position: absolute;
    left: -0.18%;
    right: 51.99%;
    top: 39.06%;
    bottom: 8.21%;
  }
`;

const Backdrop = styled(Image)`
  /* image 632 */
`;

interface HomeEntrancePageProps {
  content?: string;
}

export const HomeEntrancePage = (props: HomeEntrancePageProps) => {
  const { content } = props;

  return (
    <Container>
      <h1>{content}</h1>
      <Image
        className="image"
        src="/public/img.png"
        width={20}
        height={20}
        alt="Image"
        objectFit="contain"
      />
    </Container>
  );
};
