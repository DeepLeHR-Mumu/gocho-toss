import { FC, useState } from "react";

import { Divider, Button } from "shared-ui/deeple-ds";

import { useUserInfo } from "@/apis/auth";

import { PasswordChangeForm } from "./PasswordChangeForm";
import { cssObj } from "./style";

export const AccountPart: FC = () => {
  const { data: userData } = useUserInfo();

  const [isPasswordFormOpen, setIsPasswordFormOpen] = useState<boolean>(false);

  const handlePasswordFormOpen = () => {
    setIsPasswordFormOpen(!isPasswordFormOpen);
  };

  return (
    <div css={cssObj.contentWrapper}>
      <div css={cssObj.infoBox}>
        <div css={cssObj.inputBox}>
          <p>이메일</p>
          <span>{userData?.email}</span>
        </div>
        <Divider />
        <div css={cssObj.inputBox}>
          <p>비밀번호 변경</p>
          <Button
            size="small"
            color="outlineGray"
            type="button"
            css={cssObj.passwordButton}
            onClick={handlePasswordFormOpen}
          >
            비밀번호 변경
          </Button>
        </div>
        {isPasswordFormOpen && <PasswordChangeForm userData={userData} handleFormClose={handlePasswordFormOpen} />}
      </div>
    </div>
  );
};
