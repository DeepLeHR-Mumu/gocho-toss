import { FunctionComponent, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useModal } from "@recoil/hook/modal";
import { useIsSpecPageBlocking } from "@recoil/hook/spec";
import { useRegisterSpec } from "@api/spec";
import { specArrKeyObj } from "@constant/queryKeyFactory/spec/arrKeyObj";
import { userInfoKeyObj } from "@constant/queryKeyFactory/user/infoKeyObj";

import { SpecCardTitle } from "../common/component";
import { Spec6MiddleEndProps } from "./type";
import { specCardWrapper } from "../common/style";
import { desc, animationBox, postButtonCSS, moveButtonContainer, prevButton, nextButton } from "./style";

export const Spec6MiddleEnd: FunctionComponent<Spec6MiddleEndProps> = ({
  moveNextCard,
  movePrevCard,
  handleKeepWriteSpec,
}) => {
  const [errorMsg, setErrorMsg] = useState<number | undefined>(undefined);
  const { setCurrentModal } = useModal();
  const { setIsBlocking } = useIsSpecPageBlocking();

  const { mutate } = useRegisterSpec();
  const queryClient = useQueryClient();

  const specSubmit = () => {
    const userSpecObj = JSON.parse(sessionStorage.getItem("specObj") || "{}");

    mutate(userSpecObj, {
      onSuccess: () => {
        setIsBlocking(true);
        moveNextCard(100);
        queryClient.invalidateQueries(specArrKeyObj.all);
        sessionStorage.removeItem("specObj");
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
    <div css={specCardWrapper}>
      <SpecCardTitle
        title="기본스펙 입력 완료"
        desc="어학, 수상, 경력 등 추가적인 정보입력 필요하다면 아래 상세 스펙 추가 버튼을
            눌러주세요!!"
      />
      <div>
        <p css={desc}>
          기본스펙 입력이 완료되었습니다!
          <br />
          추가 상세 스펙정보를 입력하면 스펙평가 응답률이 68% 상승합니다!
        </p>
        {/* LATER animation */}
        {errorMsg && (
          <div css={animationBox}>
            Error Animation?_{errorMsg}
            <br />
            try again
          </div>
        )}
        {!errorMsg && <div css={animationBox}>animation</div>}
        <button type="button" css={postButtonCSS} onClick={specSubmit}>
          스펙 등록하기
        </button>
      </div>

      <div css={moveButtonContainer}>
        <button css={prevButton} type="button" onClick={movePrevCard}>
          이전
        </button>

        <button css={nextButton} type="button" onClick={handleKeepWriteSpec}>
          상세 스펙 추가
        </button>
      </div>
    </div>
  );
};
