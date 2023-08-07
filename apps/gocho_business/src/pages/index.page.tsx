import { useEffect } from "react";
import type { NextPage } from "next";

import { Footer, PageLayout } from "@/components";

import { homeFunnelEvent } from "@/ga";
import { HeaderPart, InfoPart, ButtonPart, JdPart, SidePart } from "./index/part";
import { cssObj } from "./index/style";

const HomePage: NextPage = () => {
  useEffect(() => {
    homeFunnelEvent();
  }, []);

  return (
    <div>
      <HeaderPart />
      <PageLayout>
        <div css={cssObj.container}>
          <div css={cssObj.contentContainer}>
            <InfoPart />
            <ButtonPart />
            <JdPart />
          </div>
          <div css={cssObj.sideBarContainer}>
            <SidePart />
          </div>
        </div>
        <Footer />
      </PageLayout>
    </div>
  );
};

export default HomePage;
