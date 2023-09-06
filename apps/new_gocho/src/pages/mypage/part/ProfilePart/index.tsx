import { FunctionComponent, useRef, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Profile, Button, Input } from "shared-ui/deeple-ds";

import { FiEdit3 } from "react-icons/fi";

import { usePatchUserProfile, useUserProfile } from "@/apis/auth";

import { fileEncording } from "./utils";
import { cssObj } from "./style";

type NickNameInputs = {
  nickName: string;
};

export const ProfilePart: FunctionComponent = () => {
  const { data: userData } = useUserProfile();
  const { mutate: postProfile } = usePatchUserProfile();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<NickNameInputs>({ mode: "onChange" });

  const uploadDom = useRef<HTMLInputElement>(null);

  const [userProfile, setProfile] = useState<string>(userData?.image || "");
  const [useProfileFile, setProfileFile] = useState<File | null>(null);

  const handleUploadButton = () => {
    if (uploadDom.current) {
      uploadDom.current.click();
    }
  };

  const handleProfileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("api 전송하는 file 타입", profile);
    const profile = event.target.files?.[0];
    setProfileFile(profile);

    if (profile) {
      try {
        const result = await fileEncording(profile);

        if (typeof result === "string") {
          setProfile(result);
        }
      } catch (error) {
        // console.error("An error occurred while reading the file: ", error);
      }
    }
  };

  const onSubmit: SubmitHandler<NickNameInputs> = (data) => {
    if (!userData) return;

    const queryOption = {
      onError: () => {
        setError("nickName", {
          type: "custom",
          message: "중복된 닉네임 입니다.",
        });
      },
      onSuccess: () => {
        alert("업로드 성공");
      },
    };

    if (useProfileFile) {
      postProfile(
        {
          userId: userData.id,
          image: useProfileFile,
          nickname: data.nickName !== userData?.nickname ? data.nickName : undefined,
        },
        queryOption
      );

      setProfileFile(null);
    }

    if (!useProfileFile && data.nickName === userData?.nickname) {
      setError("nickName", {
        type: "custom",
        message: "",
      });
      return;
    }

    if (!useProfileFile) {
      postProfile(
        {
          userId: userData.id,
          nickname: data.nickName !== userData?.nickname ? data.nickName : undefined,
        },
        queryOption
      );
    }
  };

  return (
    <div css={cssObj.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <form css={cssObj.contentWrapper}>
        <div css={cssObj.profileBox}>
          <Profile src={userProfile} size={120} />
          <button type="button" css={cssObj.uploadBox} onClick={handleUploadButton}>
            <FiEdit3 css={cssObj.uploadIcon} />
          </button>
          <input
            type="file"
            aria-label="프로필 업로드"
            css={cssObj.upload}
            onChange={handleProfileChange}
            ref={uploadDom}
          />
        </div>
        <div css={cssObj.formBox}>
          <Input
            type="text"
            css={cssObj.inputBox}
            defaultValue={userData?.nickname}
            state={{
              state: errors.nickName ? "error" : "default",
              message: errors.nickName ? "프로필을 변경하거나 닉네임을 입력해주세요." : "",
            }}
            placeholder="닉네임을 입력해주세요."
            {...register("nickName", {
              minLength: 1,
              maxLength: 14,
            })}
          />
        </div>
        <div css={cssObj.submitBox}>
          <Button size="small" type="submit" color={isValid ? "active" : "disable"} disabled={!isValid}>
            저장하기
          </Button>
        </div>
      </form>
    </div>
  );
};
