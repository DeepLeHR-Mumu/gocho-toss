import { FunctionComponent, useRef, useState } from "react";

import { Divider, Profile, Button } from "shared-ui/deeple-ds";

import { FiEdit3 } from "react-icons/fi";

import { useUserProfile } from "@/apis/auth";

import { cssObj } from "./style";
import { NickChangeForm } from "./NickChangeForm";

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
    const profile = event.target.files?.[0];
    if (profile) {
      const reader = new FileReader();

      const filePromise = new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reject(new Error("File reading failed"));
        };
      });

      reader.readAsDataURL(profile);

      try {
        const result = await filePromise;

        if (typeof result === "string") {
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
