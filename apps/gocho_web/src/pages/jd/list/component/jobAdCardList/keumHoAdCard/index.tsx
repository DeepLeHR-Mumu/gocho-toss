import { FunctionComponent } from "react";
import Image from "next/image";

import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { jdAdClickEvent } from "shared-ga/jd";

import { JobAdCardProps } from "./type";
import {
  cardWrapper,
  colorLine,
  mainContainer,
  companyLogoWrapper,
  companyLogoBox,
  infoContainer,
  date,
  companyName,
  titleCSS,
  buttonBox,
} from "./style";

export const KeumhoEventCard: FunctionComponent<JobAdCardProps > = ({
  isMobile,
}) => {

  return (
    <>
      <a
        css={cardWrapper(isMobile)}
        href={`${JOBS_DETAIL_URL}/${12766}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button
          type="button"
          css={buttonBox}
          onClick={() => {
            jdAdClickEvent(12766);
          }}
        >
          <div css={mainContainer}>
            <div css={companyLogoWrapper}>
              <div css={companyLogoBox}>
                <Image layout="fill" objectFit="contain" src="https://cdn.gocho-back.com/companies/663/logo.png" alt="" />
              </div>
            </div>
            <div css={infoContainer}>
              <p css={companyName}>금호미쓰이화학</p>
              <p css={date}>1/16~1/27</p>
            </div>
          </div>
          <strong css={titleCSS}>2023년 기술직 신입 인턴/경력사원 모집</strong>
        </button>
      </a>
      <div css={colorLine("#6e6e6e" || "#2284a5", isMobile)} />
    </>
  );
};
