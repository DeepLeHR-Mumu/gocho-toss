import Image from "next/image";

import defaultLogo from "shared-image/global/common/default_company_logo.svg";

import { ProfileProps } from "./type";
import { cssObj } from "./style";

export const Profile = ({ src, size = 100, onClick, altText, className }: ProfileProps) => (
  // TODO 실제 개발 시 적용되는 지 테스트 필요
  <div css={cssObj.profile(onClick !== undefined, size)}>
    <Image src={src || defaultLogo} alt={altText} width={size} height={size} onClick={onClick} className={className} />
  </div>
);
