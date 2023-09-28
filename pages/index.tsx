import Head from "next/head";
import { HomeEntrancePage } from "./home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Grain Logic Entrance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeEntrancePage content="aaaaaaa afkafjkajf" />
      </main>
    </div>
  );
}
