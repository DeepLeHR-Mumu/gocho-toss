import { FunctionComponent } from "react";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useUserState } from "@/globalStates/useUserState";

import { MANAGER_MESSSAGE_OBJ } from "./constants";
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
          window.alert(MANAGER_MESSSAGE_OBJ.DELETE);
        }}
      >
        회원탈퇴
      </button>
    </section>
  );
};
