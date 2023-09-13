import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout, LoginModal } from "@/components";
import { useUserInfo } from "@/apis/auth/useUserInfo";

import { MypageNavigation, Box } from "./component";
import { partElementArray } from "./constants";
import { cssObj } from "./style";

const MyPage: NextPage = () => {
  const router = useRouter();
  const { data: userProfile } = useUserInfo();

  const currentPart = partElementArray.find(({ type }) => type === router.query.type);

  if (!currentPart) {
    return <h1>Error</h1>;
  }

  return (
    <Layout>
      <main css={cssObj.wrapper}>
        <section css={cssObj.navBox}>
          <MypageNavigation currentPart={currentPart.type || "profile"} />
        </section>
        <section>
          <Box css={cssObj.elementBox}>
            <h3 css={cssObj.title}>{currentPart.title}</h3>
            {userProfile ? (
              currentPart.element
            ) : (
              <div css={cssObj.background}>
                <LoginModal
                  close={() => {
                    router.push("/");
                  }}
                />
              </div>
            )}
          </Box>
        </section>
      </main>
    </Layout>
  );
};

export default MyPage;
