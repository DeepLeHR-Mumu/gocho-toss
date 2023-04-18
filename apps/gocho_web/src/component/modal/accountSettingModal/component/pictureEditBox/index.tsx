import { FunctionComponent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserProfile, usePatchUserProfile } from "shared-api/auth";
import { ImageType } from "shared-type/ui/imageType";
import { NormalButton } from "shared-ui/common/atom/button";
import { CloseButton } from "@component/common/atom/closeButton";

import { useToast, useModal } from "@/globalStates";

import { ImageRadioButton } from "./component/imageRadioButton";
import { ProfileChangeFormValues } from "./type";
import { profileObjArr } from "./constant";
import { wrapper, imgContainer, closeButtonBox, title, formCSS } from "./style";

export const PictureEditBox: FunctionComponent = () => {
  const { data: userInfoData, refetch } = useUserProfile();
  const { mutate } = usePatchUserProfile();
  const { closeModal } = useModal();
  const { register, handleSubmit } = useForm<ProfileChangeFormValues>();
  const [profileUrl, setProfileUrl] = useState<string | null>(null);
  const [checkedImage, setCheckedImage] = useState<ImageType | null>(null);
  const [imageSrc, setImageSrc] = useState<File | null>(null);
  const { setToastMessage } = useToast();

  const profileImgSubmit: SubmitHandler<ProfileChangeFormValues> = () => {
    if (userInfoData && imageSrc) {
      mutate(
        {
          userId: userInfoData.id,
          image: imageSrc,
        },
        {
          onSuccess: (data) => {
            setToastMessage("프로필 이미지가 변경되었습니다.");
            localStorage.setItem("accessToken", `${data?.data.access_token}`);
            refetch();
          },
        }
      );
    }
  };

  useEffect(() => {
    const DOMAIN = `${
      process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https://xn--299a59id5upfe.com/" : "http://localhost:3000/"
    }`;

    const fetchImage = async () => {
      if (profileUrl) {
        const response = await fetch(`${DOMAIN}${profileUrl}`);
        const blob = await response.blob();
        const file = new File([blob], "image.png", { type: blob.type });
        setImageSrc(file);
      }
    };

    fetchImage();
  }, [profileUrl]);

  return (
    <div css={wrapper}>
      <div css={closeButtonBox}>
        <CloseButton size="M" buttonClick={closeModal} />
      </div>
      <strong css={title}>프로필 사진 변경</strong>
      <form onSubmit={handleSubmit(profileImgSubmit)} css={formCSS}>
        <ul css={imgContainer}>
          {profileObjArr.map((profile) => {
            return (
              <ImageRadioButton
                key={profile.key}
                imageFile={profile.image}
                checkedImage={checkedImage}
                setCheckedImage={setCheckedImage}
                setProfileUrl={setProfileUrl}
                imageValue={profile.key}
                registerObj={register("image")}
              />
            );
          })}
        </ul>
        <NormalButton isSubmit text="확인" variant="filled" wide />
      </form>
    </div>
  );
};
