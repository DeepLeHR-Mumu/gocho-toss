import { Profile } from "shared-ui/deeple-ds";

import { useUserProfile } from "@/apis/auth";

import { Box } from "../../component/Box";

import { cssObj } from "./style";

export const Account = () => {
  const { data: userData } = useUserProfile();

  return (
    <Box css={cssObj.wrapper}>
      <h3 css={cssObj.title}>계정 관리</h3>
      <div css={cssObj.contentWrapper}>
        <Profile src={userData?.image || ""} size={120} />
        <div css={cssObj.userTextWrapper}>
          <span>test</span>
        </div>
      </div>
    </Box>
  );
};
