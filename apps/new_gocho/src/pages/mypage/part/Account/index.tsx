import { FunctionComponent, useState } from "react";

import { Divider, Profile, Button } from "shared-ui/deeple-ds";

import { useUserProfile } from "@/apis/auth";

import { cssObj } from "./style";
import { NickChangeForm } from "./NickChangeForm";
import { PwdChangeForm } from "./PwdChangeForm";

export const Account: FunctionComponent = () => {
  const { data: userData } = useUserProfile();

  const [isNickFormOpen, setNickFormOpen] = useState<boolean>(false);
  const [isPwdFormOpen, setPwdFornOpen] = useState<boolean>(false);

  const handleNickFormOpen = () => {
    setNickFormOpen(!isNickFormOpen);
  };
  const handlePwdFormOpen = () => {
    setPwdFornOpen(!isPwdFormOpen);
  };

  return (
    <>
      <div css={cssObj.wrapper}>
        <div css={cssObj.contentWrapper}>
          <div css={cssObj.profileBox}>
            <Profile src={userData?.image || ""} size={120} />
            <button
              type="button"
              aria-label="프로필 업로드"
              css={cssObj.uploadBox}
              onClick={() => {
                alert("프로필 변경");
              }}
            />
          </div>
          <div css={cssObj.infoBox}>
            <div css={cssObj.nickNameBox}>
              <p>닉네임</p>
              {!isNickFormOpen ? (
                <>
                  <span>{userData?.nickname}</span>
                  <Button
                    size="small"
                    color="outlineGray"
                    type="button"
                    css={cssObj.reviseButton}
                    onClick={handleNickFormOpen}
                  >
                    수정
                  </Button>
                </>
              ) : (
                <NickChangeForm userData={userData} handleNickFormOpen={handleNickFormOpen} />
              )}
            </div>
            <Divider />
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
        </div>
      </div>
      <div css={cssObj.submitBox}>
        <Button size="small" type="submit" disabled color="disable">
          저장하기
        </Button>
      </div>
    </>
  );
};
