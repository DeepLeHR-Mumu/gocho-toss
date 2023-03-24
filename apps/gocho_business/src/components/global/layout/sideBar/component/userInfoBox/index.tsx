import { FunctionComponent } from "react";
import Link from "next/link";

import { INTERNAL_URL } from "@/constants";

import { UserInfoBoxProps } from "./type";
import { cssObj } from "./style";

export const UserInfoBox: FunctionComponent<UserInfoBoxProps> = ({ name }) => (
  <div css={cssObj.wrapper}>
    <Link href={INTERNAL_URL.RECRUITER_LIST} passHref css={cssObj.name}>
      <span css={cssObj.profile}>{name[0]}</span>
      {name}
    </Link>
  </div>
);
