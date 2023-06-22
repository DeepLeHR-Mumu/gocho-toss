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
  const { data: processJdDataObj } = useJdArr(true, { filter: "progress" });
  const { data: waitingJdDataObj } = useJdArr(true, { filter: "waiting" });
  const { data: userInfoData } = useManagerProfile();

  return (
    <div>
      <div css={partCssObj.partContainer}>
        <Link href={INTERNAL_URL.COMPANY_EDIT} css={cssObj.companyContainer} passHref>
          <div css={cssObj.companyLogo}>
            <Image src={userInfoData?.company.logoUrl || defaultCompanyLogo} alt="회사 로고" fill sizes="1" />
          </div>
          <p css={cssObj.companyName}>
            {userInfoData?.company.name} <FiChevronRight />
          </p>
        </Link>
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
      </div>
      <div css={partCssObj.partContainer}>
        <div css={cssObj.jdCountContainer}>
          <div css={cssObj.jdCountWrapper}>
            <p css={cssObj.countInfo}>진행중 공고</p>
            <p css={cssObj.countNumber}>{processJdDataObj?.pageResult.totalElements}</p>
          </div>
          <div css={cssObj.contour} />
          <div css={cssObj.jdCountWrapper}>
            <p css={cssObj.countInfo}>대기중 공고</p>
            <p css={cssObj.countNumber}>{waitingJdDataObj?.pageResult.totalElements}</p>
          </div>
        </div>
      </div>
      <div css={partCssObj.partContainer}>
        <p>광고문의</p>
      </div>
    </div>
  );
};
