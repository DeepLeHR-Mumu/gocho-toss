import Image from "next/image";

import { ProfileProps } from "./type";
import { cssObj } from "./style";

const Profile = ({ src, size = 100, onClick }: ProfileProps) => (
  <Image
    src={src}
    alt="profile"
    css={cssObj.profile(onClick !== undefined)}
    width={size}
    height={size}
    onClick={onClick}
  />
);

export default Profile;
