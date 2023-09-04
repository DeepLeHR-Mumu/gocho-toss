import { FunctionComponent } from "react";

import { Profile } from "shared-ui/deeple-ds";

import { useUserProfile } from "@/apis/auth";

import { cssObj } from "./style";

export const Account: FunctionComponent = () => {
  const { data: userData } = useUserProfile();

  return (
    <div css={cssObj.contentWrapper}>
      <Profile src={userData?.image || ""} size={120} />
      <div css={cssObj.userTextWrapper}>
        <span>test</span>
      </div>
    </div>
  );
};
