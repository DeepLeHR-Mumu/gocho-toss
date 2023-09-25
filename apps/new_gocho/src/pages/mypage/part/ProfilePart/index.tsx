import { FC, useRef, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Profile, Button, Input } from "shared-ui/deeple-ds";

import { FiEdit3 } from "react-icons/fi";

import { useToast } from "@/globalStates";
import { usePatchUserProfile, useUserInfo } from "@/apis/auth";

import { cssObj } from "./style";
import { NickNameInputs } from "./type";
import { profileImgObjArr } from "./constant";
import { convertToBlob, fileEncording } from "./utils";

export const ProfilePart: FC = () => {
  const { data: userData } = useUserInfo();
  const { mutate: postProfile } = usePatchUserProfile();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    trigger,
    formState: { errors, isValid },
  } = useForm<NickNameInputs>({ mode: "onChange", defaultValues: { nickName: userData?.nickname || "" } });

  const uploadDom = useRef<HTMLInputElement>(null);

  const [userProfile, setProfile] = useState<string>(userData?.image || "");
  const [useProfileFile, setProfileFile] = useState<File | null>(null);
  const { setToastMessage } = useToast();

  const handleUploadButton = () => {
    if (uploadDom.current) {
      uploadDom.current.click();
    }
  };

  const handleProfileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const profile = event.target.files?.[0];

    if (profile) {
      setProfileFile(profile);
      clearErrors("nickName");
      trigger("nickName");

      try {
        const result = await fileEncording(profile);

        if (typeof result === "string") {
          setProfile(result);
        }
      } catch (error) {
        // TODO: 토스트로 알림주기
      }
    }
  };

  const onSubmit: SubmitHandler<NickNameInputs> = (data) => {
    if (!userData) return;
    if (data.nickName.trim().length < 1) {
      setError("nickName", {
        type: "custom",
        message: "닉네임을 입력해 주세요.",
      });

      return;
    }

    const queryOption = {
      onError: () => {
        setError("nickName", {
          type: "custom",
          message: "중복된 닉네임 입니다.",
        });
      },
      onSuccess: () => {
        setToastMessage("프로필 변경이 완료되었습니다");
        setProfileFile(null);
      },
    };

    if (!useProfileFile && data.nickName === userData?.nickname) {
      setError("nickName", {
        type: "custom",
        message: "닉네임이나 프로필을 변경해주세요.",
      });
      return;
    }

    if (useProfileFile) {
      if (data.nickName === userData.nickname) {
        postProfile(
          {
            userId: userData.id,
            image: useProfileFile,
          },
          queryOption
        );
        return;
      }

      postProfile(
        {
          userId: userData.id,
          image: useProfileFile,
          nickname: data.nickName,
        },
        queryOption
      );

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

  const handleBasicProfile = async () => {
    if (!userData) return;

    const random = Math.floor(Math.random() * 5);

    const profileBlob = await convertToBlob(profileImgObjArr[random].image);

    const profileFile = new File([profileBlob], `${profileImgObjArr[random].key}.png`, { type: "image/png" });

    const result = await fileEncording(profileFile);

    if (typeof result === "string") {
      setProfile(result);
    }

    postProfile(
      {
        userId: userData?.id,
        image: profileFile,
      },
      {
        onSuccess: () => {
          setToastMessage("프로필 변경이 완료되었습니다");
          setProfileFile(null);
        },
      }
    );
  };

  return (
    <form css={cssObj.contentWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div css={cssObj.profileWrapper}>
        <div css={cssObj.profileBox}>
          <Profile src={userProfile} size={120} altText={`${userData?.nickname} 유저 로고`} />
          <button type="button" css={cssObj.uploadBox} onClick={handleUploadButton}>
            <FiEdit3 css={cssObj.uploadIcon} />
          </button>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            aria-label="프로필 업로드"
            css={cssObj.upload}
            onChange={handleProfileChange}
            ref={uploadDom}
          />
        </div>
        <div>
          <button type="button" css={cssObj.basicProfileButton} onClick={handleBasicProfile}>
            기본 프로필로 변경
          </button>
        </div>
      </div>
      <div css={cssObj.formBox}>
        <Input
          type="text"
          css={cssObj.inputBox}
          state={{
            state: errors.nickName ? "error" : "default",
            message: errors.nickName ? errors.nickName.message : "",
          }}
          placeholder="닉네임을 입력해주세요."
          {...register("nickName", {
            required: "닉네임은 필수로 입력해야 합니다.",
            minLength: { value: 2, message: "닉네임은 최소 2자 이상이어야 합니다." },
            maxLength: { value: 14, message: "닉네임은 최대 14자까지 가능합니다." },
            pattern: {
              value: /^[a-zA-Z0-9\u3131-\u314e\u314f-\u3163\uac00-\ud7a3\s!@#$%^&*()_+{}\]:;<>,.?~]*$/,
              message: "올바른 닉네임을 입력해 주세요.",
            },
          })}
        />
      </div>
      <div css={cssObj.submitBox}>
        <Button size="small" type="submit" color={isValid ? "active" : "disable"} disabled={!isValid}>
          저장하기
        </Button>
      </div>
    </form>
  );
};