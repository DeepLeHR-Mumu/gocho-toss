import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserInfo } from "shared-api/auth";
import { usePatchUserInfo } from "shared-api/auth/usePatchUserInfo";
import { ImageType } from "shared-type/ui/imageType";
import { NormalButton } from "shared-ui/common/atom/button";
import { CloseButton } from "@component/common/atom/closeButton";
import { useModal } from "@recoil/hook/modal";
import { useToast } from "@recoil/hook/toast";

import { wrapper, imgContainer, closeButtonBox, title } from "./style";
import { ImageRadioButton } from "./component/imageRadioButton";
import { ImageChangeFormValues } from "./type";
import { profileArr } from "./constant";

export const PictureEditBox: FunctionComponent = () => {
  const { data: userInfoData, refetch } = useUserInfo();
  const { mutate } = usePatchUserInfo();
  const { closeModal } = useModal();
  const { register, handleSubmit } = useForm<ImageChangeFormValues>();
  const [checkedImage, setCheckedImage] = useState<ImageType>(userInfoData?.image as ImageType);
  const { setCurrentToast } = useToast();

  const profileImgSubmit: SubmitHandler<ImageChangeFormValues> = ({ image }) => {
    if (userInfoData) {
      mutate(
        {
          userId: userInfoData.id,
          image,
        },
        {
          onSuccess: (data) => {
            setCurrentToast("프로필 이미지가 변경되었습니다.");
            localStorage.setItem("access_token", `${data?.data.access_token}`);
            refetch();
          },
        }
      );
    }
  };

  return (
    <div css={wrapper}>
      <div css={closeButtonBox}>
        <CloseButton size="M" buttonClick={closeModal} />
      </div>
      <strong css={title}>프로필 사진을 바꾸시겠습니까?</strong>
      <form onSubmit={handleSubmit(profileImgSubmit)}>
        <ul css={imgContainer}>
          {profileArr.map((profile) => {
            return (
              <ImageRadioButton
                key={profile}
                checkedImage={checkedImage}
                setCheckedImage={setCheckedImage}
                imageValue={profile}
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
