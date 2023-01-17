import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { dDayCalculator } from "shared-util/date";
import { jdAdClickEvent } from "shared-ga/jd";
import { JOBS_DETAIL_URL } from "shared-constant/internalURL";

import {
  cardWrapper,
  companyLogoBox,
  companyLogoWrapper,
  slideInfo,
  endTime,
  companyName,
  jdTitle,
  buttonBox,
} from "./style";

export const KeumhoAdCard: FunctionComponent = () => {
  return (
    <Link href={`${JOBS_DETAIL_URL}/12766`}>
      <button
        type="button"
        css={buttonBox}
        onClick={() => {
          jdAdClickEvent(12766);
        }}
      >
        <div css={cardWrapper}>
          <div css={slideInfo("#6e6e6e")}>
            <div css={companyLogoWrapper}>
              <div css={companyLogoBox}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="https://cdn.gocho-back.com/companies/663/logo.png"
                  alt=""
                  unoptimized
                />
              </div>
            </div>
            <p css={endTime}>{dDayCalculator(1674806400000)}</p>
            <p css={companyName}>금호미쓰이화학</p>
            <strong css={jdTitle}>2023년 기술직 신입 인턴/경력사원 모집</strong>
          </div>
        </div>
      </button>
    </Link>
  );
};
