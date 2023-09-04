import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "@/components";
import { MypageNavigation } from "./component/MypageNavigation";

import { partElementArray } from "./constants";

import { cssObj } from "./style";
import { Box } from "./component/Box";

const MyPage: NextPage = () => {
  const { query } = useRouter();

  const result = partElementArray.find(({ type }) => {
    return type === query.type;
  });

  if (!result) {
    return <h1>error</h1>;
  }

  return (
    <Layout>
      <main css={cssObj.wrapper}>
        <section css={cssObj.navBox}>
          <MypageNavigation />
        </section>
        <section>
          <Box css={cssObj.elementBox}>
            <h3 css={cssObj.title}>{result.title}</h3>
            {result.element}
          </Box>
        </section>
      </main>
    </Layout>
  );
};

export default MyPage;
