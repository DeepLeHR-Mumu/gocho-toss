import { FunctionComponent, useRef, useState } from "react";

import { Divider, Profile, Button } from "shared-ui/deeple-ds";

import { FiEdit3 } from "react-icons/fi";

import { useUserProfile } from "@/apis/auth";

import { NickChangeForm } from "./NickChangeForm";
import { fileEncording } from "./utils";
import { cssObj } from "./style";

export const ProfilePart: FunctionComponent = () => {
  const { data: userData } = useUserProfile();

  const uploadDom = useRef<HTMLInputElement>(null);

  const [isNickFormOpen, setNickFormOpen] = useState<boolean>(false);
  const [isSaveBtnActive, setSaveBtnActive] = useState<boolean>(false);

  const [userProfile, setProfile] = useState<string>(userData?.image || "");

  const handleNickFormOpen = () => {
    setNickFormOpen(!isNickFormOpen);
  };

  const handleUploadButton = () => {
    if (uploadDom.current) {
      uploadDom.current.click();
    }
  };

  const handleProfileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("api 전송하는 file 타입", profile);
    const profile = event.target.files?.[0];

    if (profile) {
      try {
        const result = await fileEncording(profile);

        if (typeof result === "string") {
          // console.log("미리 보기 next/image 프로필", result);
          setProfile(result);
          setSaveBtnActive(true);
        }
      } catch (error) {
        // console.error("An error occurred while reading the file: ", error);
      }
    }
  };

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.contentWrapper}>
        <div css={cssObj.profileBox}>
          <Profile src={userProfile} size={120} />
          <button type="button" css={cssObj.uploadBox} onClick={handleUploadButton}>
            <FiEdit3 css={cssObj.uploadIcon} />
          </button>
          <input
            type="file"
            aria-label="프로필 업로드"
            onChange={handleProfileChange}
            css={cssObj.upload}
            ref={uploadDom}
          />
        </div>
        <div css={cssObj.infoBox}>
          <div css={cssObj.inputBox}>
            <p>닉네임</p>
            <NickChangeForm userData={userData} handleNickFormOpen={handleNickFormOpen} />
          </div>
          <Divider />
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
