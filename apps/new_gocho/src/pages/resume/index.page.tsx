import { NextPage } from "next";

import { useUserInfo } from "@/apis/auth";
import { useResumeArr } from "@/apis/users";

import { Layout } from "@/components";

import { SidePart, ProfilePart, EducationPart, CareerPart, ActivityPart, CertificationPart, FluencyPart } from "./part";
import { cssObj } from "./style";
import { useDetectedPart } from "./util";

const ResumePage: NextPage = () => {
  const { data: userData } = useUserInfo();
  const { data: resumeArr } = useResumeArr(userData?.id);
  const {
    currentPart,
    handleClickScroll,
    profileRef,
    educationRef,
    careerRef,
    certificationRef,
    fluencyRef,
    activityRef,
  } = useDetectedPart();

  if (!userData || !resumeArr) {
    return <> </>;
  }

  const resumeId = resumeArr?.data[0].id;

  return (
    <main css={cssObj.background}>
      <Layout>
        <div css={cssObj.contentsWrapper}>
          <div css={cssObj.mainContentsWrapper}>
            <ProfilePart userId={userData.id} ref={profileRef} />
            <EducationPart resumeId={resumeId} ref={educationRef} />
            <CareerPart resumeId={resumeId} ref={careerRef} />
            <CertificationPart resumeId={resumeId} ref={certificationRef} />
            <FluencyPart resumeId={resumeId} ref={fluencyRef} />
            <ActivityPart resumeId={resumeId} ref={activityRef} />
          </div>
          <div css={cssObj.sideContentsWrapper}>
            <SidePart resumeId={resumeId} currentPart={currentPart} handleClickScroll={handleClickScroll} />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default ResumePage;
