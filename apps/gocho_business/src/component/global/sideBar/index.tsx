import { FunctionComponent } from "react";
import Link from "next/link";

import { INTERNAL_URL } from "@/constant";

import { wrapper } from "./style";

export const SideBar: FunctionComponent = () => {
  return (
    <nav css={wrapper}>
      <Link href={INTERNAL_URL.JD_LIST}>
        <a>공고</a>
      </Link>
      <Link href={INTERNAL_URL.FACTORY_LIST}>
        <a>공장</a>
      </Link>
      <Link href={INTERNAL_URL.COMPANY_EDIT}>
        <a>기업 정보 수정</a>
      </Link>
      <Link href={INTERNAL_URL.RECRUITER_LIST}>
        <a>기업 계정 목록</a>
      </Link>
      <Link href={INTERNAL_URL.MY_PAGE}>
        <a>회원 정보</a>
      </Link>
    </nav>
  );
};
