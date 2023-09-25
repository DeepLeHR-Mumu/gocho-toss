import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiEdit3 } from "react-icons/fi";

import { Profile, Button, Input } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { usePatchUserProfile, useUserInfo } from "@/apis/auth";

import { cssObj } from "./style";
import { NicknameInput } from "./type";
import { profileImgObjArr } from "./constant";
import { convertToBlob, fileEncording } from "./utils";

export const ProfilePart: FC = () => {
  const [userProfilePreview, setUserProfilePreview] = useState<string>();
  const [userProfile, setUserProfile] = useState<File | null>(null);
  const [isProfileDirty, setIsProfileDirty] = useState<boolean>(false);

  const { data: userData } = useUserInfo();
  const { mutate: postProfile } = usePatchUserProfile();
  const { setToastMessage } = useToast();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    trigger,
    reset,
    formState: { errors, isDirty },
  } = useForm<NicknameInput>({ mode: "onChange" });

  useEffect(() => {
    reset({ nickName: userData?.nickname });
  }, [reset, userData]);

  const isFormDirty = isDirty || isProfileDirty;

  const handleProfileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const profile = event.target.files?.[0];

    if (profile) {
      setUserProfile(profile);
      clearErrors("nickName");
      trigger("nickName");

      try {
        const result = await fileEncording(profile);

        if (typeof result === "string") {
          setUserProfilePreview(result);
          setIsProfileDirty(true);
        }
      } catch (error) {
        setToastMessage("파일 업로드 중 오류가 발생했습니다. 파일 양식을 확인하거나 다시 시도해 주세요.");
      }
    }
  };

  const onSubmit: SubmitHandler<NicknameInput> = (data) => {
    if (!userData) return;

    if (!isFormDirty) {
      window.alert("변경사항이 없습니다.");
      return;
    }

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
        setUserProfile(null);
        setIsProfileDirty(false);
      },
    };

    if (userProfile) {
      if (data.nickName === userData.nickname) {
        postProfile(
          {
            userId: userData.id,
            image: userProfile,
          },
          queryOption
        );
        return;
      }

      postProfile(
        {
          userId: userData.id,
          image: userProfile,
          nickname: data.nickName,
        },
        queryOption
      );

      return;
    }

    if (!userProfile) {
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
      setUserProfile(profileFile);
      setUserProfilePreview(result);
      setIsProfileDirty(true);
    }
  };

  return (
    <form css={cssObj.contentWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div css={cssObj.profileWrapper}>
        <div css={cssObj.profileBox}>
          {userProfilePreview ? (
            <Profile src={userProfilePreview} size={120} altText={`${userData?.nickname} 유저 로고`} />
          ) : (
            <Profile src={userData?.image || ""} size={120} altText={`${userData?.nickname} 유저 로고`} />
          )}
          <label htmlFor="userProfile" css={cssObj.uploadBox}>
            <FiEdit3 css={cssObj.uploadIcon} />
            <input
              id="userProfile"
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              aria-label="프로필 업로드"
              css={cssObj.upload}
              onChange={handleProfileChange}
            />
          </label>
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
        <Button size="small" type="submit" color={isFormDirty ? "active" : "disable"} disabled={!isFormDirty}>
          저장하기
        </Button>
      </div>
    </form>
  );
};
