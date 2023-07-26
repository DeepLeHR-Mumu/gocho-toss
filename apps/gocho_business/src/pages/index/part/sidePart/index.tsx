import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiTool, FiEye, FiChevronRight } from "react-icons/fi";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useJdArr, useManagerProfile } from "@/apis";

import { INTERNAL_URL } from "@/constants";
import { partCssObj } from "../style";
import { cssObj } from "./style";

export const SidePart: FunctionComponent = () => {
  const { data: userInfoData } = useManagerProfile();
  const { data: processJdDataObj } = useJdArr(Boolean(userInfoData), { filter: "progress" });
  const { data: waitingJdDataObj } = useJdArr(Boolean(userInfoData), { filter: "waiting" });

  const isAuth = userInfoData?.status.name === "인증완료";

  return (
    <div>
      <div css={partCssObj.partContainer}>
        <Link href={INTERNAL_URL.COMPANY_EDIT} css={cssObj.companyContainer} passHref>
          <div css={cssObj.companyLogo}>
            <Image
              src={isAuth ? userInfoData?.company.logoUrl || defaultCompanyLogo : defaultCompanyLogo}
              alt="회사 로고"
              fill
              sizes="1"
            />
          </div>
          <p css={cssObj.companyName}>
            {userInfoData?.company.name} <FiChevronRight />
          </p>
        </Link>
        {isAuth ? (
          <>
            <div css={cssObj.infoContainer}>
              <FiTool />
              <strong css={cssObj.infoTitle}>업종</strong>
              <p css={cssObj.info}>{userInfoData?.company.industry}</p>
            </div>
            <div css={cssObj.infoContainer}>
              <FiEye />
              <strong css={cssObj.infoTitle}>기업 조회수</strong>
              <p css={cssObj.info}>{userInfoData?.company.id}</p>
            </div>
          </>
        ) : (
          <Link href={INTERNAL_URL.COMPANY_AUTH} css={cssObj.companyAuthButton} passHref>
            기업 인증하기
          </Link>
        )}
      </div>
      <div css={partCssObj.partContainer}>
        <div css={cssObj.jdCountContainer}>
          <div css={cssObj.jdCountWrapper}>
            <p css={cssObj.countInfo}>진행중 공고</p>
            <p css={cssObj.countNumber(isAuth)}>{isAuth ? processJdDataObj?.pageResult.totalElements : 0}</p>
          </div>
          <div css={cssObj.contour} />
          <div css={cssObj.jdCountWrapper}>
            <p css={cssObj.countInfo}>대기중 공고</p>
            <p css={cssObj.countNumber(isAuth)}>{isAuth ? waitingJdDataObj?.pageResult.totalElements : 0}</p>
          </div>
        </div>
      </div>
      <div css={partCssObj.partContainer}>
        <p>광고문의</p>
      </div>
    </div>
  );
};
