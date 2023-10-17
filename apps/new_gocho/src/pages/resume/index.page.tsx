import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Layout } from "@/components";

import { SidePart, InfoPart, EducationPart, CareerPart, ActivityPart } from "./part";
import { cssObj } from "./style";

const ResumePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
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
};

export default ResumePage;
