import { FC, useState } from "react";

import { Divider, Profile, Button } from "shared-ui/deeple-ds";

import { useUserProfile } from "@/apis/auth";

import { cssObj } from "./style";
import { PwdChangeForm } from "./PwdChangeForm";

export const AccountPart: FC = () => {
  const { data: userData } = useUserProfile();

  const [isPwdFormOpen, setPwdFornOpen] = useState<boolean>(false);
  const [isSaveBtnActive, setSaveBtnActive] = useState<boolean>(false);

  const handlePwdFormOpen = () => {
    setPwdFornOpen(!isPwdFormOpen);
    // TODO: 나중에 수정하기
    setSaveBtnActive(true);
  };

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.contentWrapper}>
        <div css={cssObj.profileBox}>
          <Profile src={userData?.image || ""} size={120} />
        </div>
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
          {isPwdFormOpen && <PwdChangeForm />}
        </div>

        <div css={cssObj.submitBox}>
          <Button
            size="small"
            type="submit"
            color={isSaveBtnActive ? "active" : "disable"}
            onClick={() => {
              alert("123");
            }}
            disabled={!isSaveBtnActive}
          >
            저장하기
          </Button>
        </div>
      </div>
    </div>
  );
};
