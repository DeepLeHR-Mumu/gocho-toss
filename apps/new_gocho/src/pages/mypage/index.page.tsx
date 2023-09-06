import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "@/components";
import { MypageNavigation } from "./component/MypageNavigation";

import { partElementArray } from "./constants";

import { cssObj } from "./style";
import { Box } from "./component/Box";

const MyPage: NextPage = () => {
  const { query } = useRouter();

  const curPart = partElementArray.find(({ type }) => {
    return type === query.type;
  });

  if (!curPart) return <h1>에러에러</h1>;

  return (
    <Layout>
      <main css={cssObj.wrapper}>
        <section css={cssObj.navBox}>
          <MypageNavigation currentPart={curPart.type || "profile"} />
        </section>
        <section>
          <Box css={cssObj.elementBox}>
            <h3 css={cssObj.title}>{curPart.title}</h3>
            {curPart.element}
          </Box>
        </section>
      </main>
    </Layout>
  );
};

export default MyPage;
