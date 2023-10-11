import { NextPage } from "next";

import { Layout } from "@/components";

import { SidePart, InfoPart, EducationPart, CareerPart, ActivityPart } from "./part";
import { cssObj } from "./style";

const ResumePage: NextPage = () => (
  <main css={cssObj.background}>
    <Layout>
      <div css={cssObj.contentsWrapper}>
        <div css={cssObj.mainContentsWrapper}>
          <InfoPart />
          <EducationPart />
          <CareerPart />
          <ActivityPart />
        </div>
        <div css={cssObj.sideContentsWrapper}>
          <SidePart />
        </div>
      </div>
    </Layout>
  </main>
);

export default ResumePage;
