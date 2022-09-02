import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useModal } from "@recoil/hook/modal";
import { useSpecRegisterObj } from "@recoil/hook/spec";
import { useRegisterSpec } from "@api/spec";
import { specArrKeyObj } from "@constant/queryKeyFactory/spec/arrKeyObj";
import { userInfoKeyObj } from "@constant/queryKeyFactory/user/infoKeyObj";

import { SpecCardTitle, MoveCardButtons } from "../common/component";
import { Spec8AwardCareerEtcProps, PostSubmitValues } from "./type";
import { specCardWrapper, formCSS } from "../common/style";
import { textareaCSS } from "./style";

export const Spec8AwardCareerEtc: FunctionComponent<
  Spec8AwardCareerEtcProps
> = ({ moveNextCard, movePrevCard }) => {
  const { handleSubmit, register } = useForm<PostSubmitValues>({
    mode: "onChange",
  });
  const { currentSpecObj, resetSpecRegisterObj } = useSpecRegisterObj();
  const [errorMsg, setErrorMsg] = useState<number | undefined>(undefined);

  const { setCurrentModal } = useModal();
  const { mutate } = useRegisterSpec();
  const queryClient = useQueryClient();

  const postSubmit: SubmitHandler<PostSubmitValues> = (formData) => {
    const specRegisterObj = { ...currentSpecObj, ...formData };
    mutate(specRegisterObj, {
      onSuccess: () => {
        queryClient.invalidateQueries(specArrKeyObj.all);
        moveNextCard(100);
        resetSpecRegisterObj();
      },
      onError: (error) => {
        const errorCode = error.response?.status;
        setErrorMsg(errorCode);

        if (errorCode === 401) {
          queryClient.invalidateQueries(userInfoKeyObj.userInfo);
          setCurrentModal("loginModal");
        }
      },
    });
  };

  return (
    <div>
      <div css={specCardWrapper}>
        <form css={formCSS}>
          <SpecCardTitle
            title="수상이력"
            desc="수상한 이력이 있다면 적어주세요."
          />
          <textarea
            css={textareaCSS}
            placeholder="예시 산업통상인력자원부 생산직 기능 실기대회 금상"
            {...register("award")}
          />

          <SpecCardTitle title="경력사항" desc="경력이 있다면 적어주세요." />
          <textarea
            css={textareaCSS}
            placeholder="예시 생산직/오퍼레이터 3년 2개월"
            {...register("career")}
          />

          <SpecCardTitle
            title="기타"
            desc="그 외 입력하고 싶은 사항이 있다면 적어주세요"
          />
          <textarea
            css={textareaCSS}
            placeholder="예시 대외활동/봉사활동 현대 오일 뱅크 앰배서더 3개월"
            {...register("etc")}
          />

          <div>
            {errorMsg && <p> 스펙등록 과정에 문제가 생긴 메세지{errorMsg}</p>}
          </div>

          <MoveCardButtons
            nextTitle="완료"
            movePrevCard={movePrevCard}
            postSubmit={handleSubmit(postSubmit)}
          />
        </form>
      </div>
    </div>
  );
};
