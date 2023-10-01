import Head from "next/head";
import { HomeEntrancePage } from "./home";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Grain Logic Entrance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeEntrancePage />
    </Container>
  );
}
