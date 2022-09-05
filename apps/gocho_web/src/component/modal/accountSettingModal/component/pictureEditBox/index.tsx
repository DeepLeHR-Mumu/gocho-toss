import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserInfo } from "@api/auth";
import { usePatchUserInfo } from "@api/auth/usePatchUserInfo";
import { ImageType } from "@type/ui/imageType";

import { wrapper, imgContainer, confirmButton } from "./style";
import { ImageRadioButton } from "./component/imageRadioButton";
import { ImageChangeFormValues } from "./type";
import { profileArr } from "./constant";

export const PictureEditBox: FunctionComponent = () => {
  const { data: userInfoData, refetch } = useUserInfo();
  const { mutate } = usePatchUserInfo();

  const { register, handleSubmit } = useForm<ImageChangeFormValues>();
  const [checkedImage, setCheckedImage] = useState<ImageType>(userInfoData?.image as ImageType);

  const profileImgSubmit: SubmitHandler<ImageChangeFormValues> = ({ image }) => {
    if (userInfoData) {
      mutate(
        {
          userId: userInfoData.id,
          image,
        },
        {
          onSuccess: (data) => {
            localStorage.setItem("token", `${data?.data.token}`);
            refetch();
          },
          // onError: (err) => {
          //   setServerErrorMsg(err.userInfoData?.data.error.errorMessage);
          // },
        }
      );
    }
  };

  return (
    <div css={wrapper}>
      <form onSubmit={handleSubmit(profileImgSubmit)}>
        <div css={imgContainer}>
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
        </div>
        <button type="submit" css={confirmButton}>
          확인
        </button>
      </form>
    </div>
  );
};
