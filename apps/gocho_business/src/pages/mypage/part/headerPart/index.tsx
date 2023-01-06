import { FunctionComponent } from "react";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useUserState } from "@/globalStates/useUserState";

import { cssObj } from "./style";

export const HeaderPart: FunctionComponent = () => {
  const { userInfoData } = useUserState();

  if (!userInfoData) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <section css={cssObj.wrapper}>
      <p css={cssObj.name}>
        <span css={cssObj.profile}>{userInfoData.name[0]}</span>
        {`${userInfoData.name}(${userInfoData.department})`}
      </p>
      <button
        css={cssObj.deleteUserButton}
        type="button"
        onClick={() => {
          window.alert("홈페이지 우측 하단 채널톡을 이용해 문의해주세요.");
        }}
      >
        회원탈퇴
      </button>
    </section>
  );
};
