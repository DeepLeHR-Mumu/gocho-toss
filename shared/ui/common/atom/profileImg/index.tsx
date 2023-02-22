import { FunctionComponent } from "react";
import Image from "next/image";

import { ProfileImgProps } from "./type";
import { wrapper } from "./style";
import { selectImage } from "./utils";

export const ProfileImg: FunctionComponent<ProfileImgProps> = ({ imageStr = "default", size }) => (
  <div css={wrapper(size)}>
    <Image src={selectImage(imageStr)} alt="유저 프로필" />
  </div>
);
