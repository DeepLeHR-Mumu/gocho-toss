import { FC, useState } from "react";

import { Divider, Button } from "shared-ui/deeple-ds";

import { useUserProfile } from "@/apis/auth";

import { cssObj } from "./style";
import { PwdChangeForm } from "./PwdChangeForm";

export const AccountPart: FC = () => {
  const { data: userData } = useUserProfile();

  const [isPwdFormOpen, setPwdFornOpen] = useState<boolean>(false);

  const handlePwdFormOpen = () => {
    setPwdFornOpen(!isPwdFormOpen);
  };

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.contentWrapper}>
        <div css={cssObj.infoBox}>
          <div css={cssObj.inputBox}>
            <p>이메일</p>
            <span>{userData?.email}</span>
          </div>
          <Divider />
          <div css={cssObj.inputBox}>
            <p>비밀번호 변경</p>
            <Button size="small" color="outlineGray" type="button" css={cssObj.pwdButton} onClick={handlePwdFormOpen}>
              비밀번호 변경
            </Button>
          </div>
          {isPwdFormOpen && <PwdChangeForm userData={userData} handleFormClose={handlePwdFormOpen} />}
        </div>
      </div>
    </div>
  );
};
