import { FunctionComponent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useRegisterSpec } from "shared-api/spec";
import { specArrKeyObj } from "shared-constant/queryKeyFactory/spec/arrKeyObj";
import { userInfoKeyObj } from "shared-constant/queryKeyFactory/user/infoKeyObj";
import { specRegisterEvent } from "shared-ga/spec";

import { useModal } from "@recoil/hook/modal";
import { TopTitle, BottomButton } from "@pages/datalab/spec/register/component";

import { specCardWrapper, formCSS } from "../style";

import { Spec8AwardCareerEtcProps, PostSubmitValues } from "./type";
import { textareaCSS } from "./style";

export const Spec8AwardCareerEtc: FunctionComponent<Spec8AwardCareerEtcProps> = ({ moveNextCard, movePrevCard }) => {
  const { handleSubmit, register } = useForm<PostSubmitValues>({
    mode: "onChange",
  });

  const { mutate: postMySpecRegister } = useRegisterSpec();
  const queryClient = useQueryClient();
  const { setCurrentModal } = useModal();

  const movePrevSlider = () => {
    movePrevCard("6");
  };

  const postSubmit: SubmitHandler<PostSubmitValues> = async (formData) => {
    const prevSpecObj = await JSON.parse(sessionStorage.getItem("specObj") || "{}");
    const etcData = formData.etc.split("\n").filter((text) => {
      if (text === "") return false;
      return text;
    });
    const awardData = formData.award.split("\n").filter((text) => {
      if (text === "") return false;
      return text;
    });
    const careerData = formData.career.split("\n").filter((text) => {
      if (text === "") return false;
      return text;
    });

    const currentSpecObj = await {
      ...prevSpecObj,
      etc: etcData.length === 0 ? null : etcData,
      award: awardData.length === 0 ? null : awardData,
      career: careerData.length === 0 ? null : careerData,
    };

    postMySpecRegister(currentSpecObj, {
      onError: (error) => {
        const errorCode = error.response?.status;

        if (errorCode === 401) {
          queryClient.invalidateQueries(userInfoKeyObj.userInfo);
          setCurrentModal("loginModal", { button: "home" });
        }
      },
      onSuccess: () => {
        specRegisterEvent(true);
        queryClient.invalidateQueries(specArrKeyObj.all);
        moveNextCard("8");
        sessionStorage.removeItem("specObj");
      },
    });
  };

  return (
    <div>
      <div css={specCardWrapper}>
        <form css={formCSS}>
          <TopTitle title="수상이력" desc="수상한 이력이 있다면 적어주세요." />
          <textarea
            css={textareaCSS}
            placeholder="예시 산업통상인력자원부 생산직 기능 실기대회 금상"
            {...register("award")}
          />

          <TopTitle title="경력사항" desc="경력이 있다면 적어주세요." />
          <textarea css={textareaCSS} placeholder="예시 생산직/오퍼레이터 3년 2개월" {...register("career")} />

          <TopTitle title="기타" desc="그 외 입력하고 싶은 사항이 있다면 적어주세요" />
          <textarea
            css={textareaCSS}
            placeholder="예시 대외활동/봉사활동 현대 오일 뱅크 앰배서더 3개월"
            {...register("etc")}
          />

          <BottomButton nextTitle="완료" movePrevCard={movePrevSlider} postSubmit={handleSubmit(postSubmit)} />
        </form>
      </div>
    </div>
  );
};
