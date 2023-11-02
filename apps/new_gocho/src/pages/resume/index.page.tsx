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
    setCurrentPart,
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

  const handleClickScroll = (part: string) => {
    let myRef = null;

    setCurrentPart(part);

    switch (part) {
      case "기본정보": {
        myRef = profileRef;
        break;
      }
      case "학력": {
        myRef = educationRef;
        break;
      }
      case "경력": {
        myRef = careerRef;
        break;
      }
      case "자격증": {
        myRef = certificationRef;
        break;
      }
      case "어학": {
        myRef = fluencyRef;
        break;
      }
      case "대외활동": {
        myRef = activityRef;
        break;
      }
      default:
        myRef = profileRef;
        break;
    }
    if (myRef.current) {
      const headerHeight = 180; // 헤더의 높이를 적절한 값으로 설정
      const element = myRef.current;
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  };

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
