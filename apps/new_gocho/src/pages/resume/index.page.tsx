import { NextPage } from "next";

import { useUserInfo } from "@/apis/auth";
import { useResumeArr } from "@/apis/users/resume/useResumeArr";

import { Layout } from "@/components";

import { SidePart, ProfilePart, EducationPart, CareerPart, ActivityPart, CertificationPart, FluencyPart } from "./part";
import { cssObj } from "./style";

const ResumePage: NextPage = () => {
  const { data: userData } = useUserInfo();
  const { data: resumeArr } = useResumeArr(userData?.id);

  if (!userData || !resumeArr) {
    return <> </>;
  }

  // TODO: resume 하나만 사용하는것으로 판단 추후 변경
  const resumeId = resumeArr.data[0].id;

  return (
    <main css={cssObj.background}>
      <Layout>
        <div css={cssObj.contentsWrapper}>
          <div css={cssObj.mainContentsWrapper}>
            <ProfilePart userId={userData.id} />
            <EducationPart />
            <CareerPart />
            <CertificationPart resumeId={resumeId} userId={userData.id} />
            <FluencyPart />
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
