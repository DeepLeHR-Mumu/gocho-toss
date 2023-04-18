import { FunctionComponent } from "react";
import Image from "next/image";

import { ProfileImgProps } from "./type";
import { wrapper } from "./style";

export const ProfileImg: FunctionComponent<ProfileImgProps> = ({ imageStr, size }) => (
  <div css={wrapper(size)}>
    <Image src={imageStr} alt="유저 프로필" fill sizes="1" />
  </div>
);
