import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout, LoginModal } from "@/components";
import { MypageNavigation } from "./component/MypageNavigation";

import { partElementArray } from "./constants";

import { cssObj } from "./style";
import { Box } from "./component/Box";
import { useUserProfile } from "@/apis/auth";

const MyPage: NextPage = () => {
  const router = useRouter();
  const { data: userProfile } = useUserProfile();

  const curPart = partElementArray.find(({ type }) => {
    return type === router.query.type;
  });

  if (!curPart) {
    return <h1>Error</h1>;
  }

  if (!userProfile) {
    /* TODO: 모달창 논의 필요 */
    return (
      <div css={cssObj.background}>
        <LoginModal
          close={() => {
            router.push("/");
          }}
        />
      </div>
    );
  }

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
