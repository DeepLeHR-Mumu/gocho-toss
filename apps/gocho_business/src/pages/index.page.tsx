import type { NextPage } from "next";

import { Spinner } from "shared-ui/common/atom/spinner";

import { Footer, PageLayout } from "@/components";
import { useManagerProfile } from "@/apis";

import { HeaderPart, InfoPart, ButtonPart, JdPart, SidePart } from "./index/part";
import { cssObj } from "./index/style";

const HomePage: NextPage = () => {
  const { data: userInfoData } = useManagerProfile();

  if (!userInfoData) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const isAuth = userInfoData.status.name !== "미인증";

  return (
    <div>
      <HeaderPart />
      <PageLayout>
        <div css={cssObj.container}>
          <div css={cssObj.contentContainer}>
            <InfoPart />
            <ButtonPart />
            <JdPart isAuth={isAuth} />
          </div>
          <div css={cssObj.sideBarContainer}>
            <SidePart isAuth={isAuth} />
          </div>
        </div>
        <Footer />
      </PageLayout>
    </div>
  );
};

export default HomePage;
