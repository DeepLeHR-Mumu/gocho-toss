import { FunctionComponent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

import { useRegisterSpec } from "shared-api/spec";
import { specArrKeyObj } from "shared-constant/queryKeyFactory/spec/arrKeyObj";
import { userInfoKeyObj } from "shared-constant/queryKeyFactory/user/infoKeyObj";
import jobiFighting from "shared-image/global/jobi/fighting.png";
import { specRegisterEvent } from "shared-ga/spec";

import { useModal } from "@recoil/hook/modal";
import { TopTitle } from "@pages/datalab/spec/register/component";

import { specCardWrapper } from "../style";

import { Spec6MiddleEndProps } from "./type";
import { desc, animationBox, postButtonCSS, moveButtonContainer, prevButton, nextButton, colorPoint } from "./style";

export const Spec6MiddleEnd: FunctionComponent<Spec6MiddleEndProps> = ({
  moveNextCard,
  movePrevCard,
  writeMoreSpecHandler,
}) => {
  const { setCurrentModal } = useModal();

  const { mutate } = useRegisterSpec();
  const queryClient = useQueryClient();

  const movePrevSlider = () => {
    movePrevCard("4");
  };

  const specSubmit = () => {
    const userSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");
    mutate(
      {
        secret: userSpecObj.secret,
        gender: userSpecObj.gender,
        age: userSpecObj.age,
        military: userSpecObj.military,
        desired_task: userSpecObj.desiredTask,
        desired_industry: userSpecObj.desiredIndustry,
        last_education: userSpecObj.lastEducation,
        highschool: {
          type: userSpecObj.highschool.type,
          naesin: userSpecObj.highschool.naesin,
          absent: userSpecObj.highschool.absent,
          tardy: userSpecObj.highschool.tardy,
          leave_early: userSpecObj.highschool.leaveEarly,
          class_miss: userSpecObj.highschool.classMiss,
        },
        college: {
          department: userSpecObj.college.department,
          grade: userSpecObj.college.grade,
          max_grade: userSpecObj.college.maxGrade,
          uturn: userSpecObj.college.uturn,
        },
        certificate: userSpecObj.certificate,
        language: userSpecObj.language,
        award: userSpecObj.award,
        career: userSpecObj.career,
        etc: userSpecObj.etc,
      },
      {
        onError: (error) => {
          const errorCode = error.response?.status;
          if (errorCode === 401) {
            queryClient.invalidateQueries(userInfoKeyObj.userInfo);
            setCurrentModal("loginModal", { button: "home" });
          }
        },
        onSuccess: () => {
          specRegisterEvent(false);
          moveNextCard("8");
          queryClient.invalidateQueries(specArrKeyObj.all);
          sessionStorage.removeItem("specObj");
        },
      }
    );
  };

  return (
    <div css={specCardWrapper}>
      <TopTitle
        title="기본스펙 입력 완료"
        desc="어학, 수상, 경력 등 추가적인 정보입력 필요하다면 아래 상세 스펙 추가 버튼을
            눌러주세요!!"
      />
      <div>
        <p css={desc}>
          기본스펙 입력이 완료되었습니다!
          <br />
          추가 상세 스펙정보를 입력하면 스펙평가 <span css={colorPoint}>응답률이 68% 상승</span>합니다!
        </p>

        <div css={animationBox}>
          <Image src={jobiFighting} alt="" fill />
        </div>

        <button type="button" css={postButtonCSS} onClick={specSubmit}>
          스펙 등록하기
        </button>
      </div>

      <div css={moveButtonContainer}>
        <button css={prevButton} type="button" onClick={movePrevSlider}>
          이전
        </button>

        <button css={nextButton} type="button" onClick={writeMoreSpecHandler}>
          상세 스펙 추가
        </button>
      </div>
    </div>
  );
};
