import type { NextPage } from "next";
import { mainContainer, title } from "@style/commonStyles";

const Home: NextPage = () => {
  return (
    <main css={mainContainer}>
      <h2 css={title}>This is Manager Page!!</h2>
    </main>
  );
};

export default Home;
