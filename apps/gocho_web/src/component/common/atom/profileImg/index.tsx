import { FunctionComponent } from "react";
import Image from "next/image";

import { ProfileImgProps } from "./type";
import { wrapper } from "./style";
import { selectImage } from "./utils";

export const ProfileImg: FunctionComponent<ProfileImgProps> = ({
  imageStr = "default",
  size,
}) => {
  return (
    <div css={wrapper(size)}>
      <Image
        src={selectImage(imageStr)}
        layout="responsive"
        alt="유저 프로필"
      />
    </div>
  );
};
