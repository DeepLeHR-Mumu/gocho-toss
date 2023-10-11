import { NextPage } from "next";

import { Layout } from "@/components";

import { SidePart } from "./part/SidePart";
import { cssObj } from "./style";

const ResumePage: NextPage = () => (
  <main css={cssObj.background}>
    <Layout>
      <div css={cssObj.contentsWrapper}>
        <div css={cssObj.mainContentsWrapper}>{/** TODO 메인 컨텐츠 들어갈 곳 */}</div>
        <div css={cssObj.sideContentsWrapper}>
          <SidePart />
        </div>
      </div>
    </Layout>
  </main>
);

export default ResumePage;
