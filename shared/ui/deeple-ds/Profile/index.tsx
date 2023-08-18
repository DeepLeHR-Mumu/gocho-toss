import Image from "next/image";

import { ProfileProps } from "./type";
import { cssObj } from "./style";

const Profile = ({ src, size = 100, onClick }: ProfileProps) => (
  <Image
    src={src}
    alt="profile"
    css={cssObj.profile(onClick !== undefined)} // TODO 실제 개발 시 적용되는 지 테스트 필요
    width={size}
    height={size}
    onClick={onClick}
  />
);

export default Profile;