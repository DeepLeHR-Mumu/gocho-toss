import { NextPage } from "next";

import { Layout } from "@/components";

import { SidePart, InfoPart, EducationPart, CareerPart } from "./part";
import { cssObj } from "./style";

const ResumePage: NextPage = () => (
  <main css={cssObj.background}>
    <Layout>
      <div css={cssObj.contentsWrapper}>
        <div css={cssObj.mainContentsWrapper}>
          <InfoPart />
          <EducationPart />
          <CareerPart />
        </div>
        <div css={cssObj.sideContentsWrapper}>
          <SidePart />
        </div>
      </div>
    </Layout>
  </main>
);

export default ResumePage;
