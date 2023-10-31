import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { DDayChip } from "shared-ui/deeple-ds";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { JdBookmark, SkeletonBox } from "@/components";

import { jdAdClickEvent } from "@/ga/jd";
import { INTERNAL_URL } from "@/constants";
import { JdCardProps } from "./type";
import { cssObj } from "./style";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd, ad, blockClick }) => {
  if (!jd) {
    return (
      <div css={cssObj.skeletonWrapper}>
        <SkeletonBox />
      </div>
    );
  }

  return (
    <div css={cssObj.cardWrapper}>
      {/* <Link
        href={`${INTERNAL_URL.JD_DETAIL}/${jd.id}`}
        onClick={() => {
          if (ad) {
            jdAdClickEvent(jd.id);
          }
        }}
        rel="noopener noreferrer"
      > */}
      <div css={cssObj.imageWrapper}>
        <Image
          src={jd.company.logoUrl || defaultCompanyLogo}
          alt="회사 로고"
          fill
          onClick={() => {
            // TODO 로그인 모달 전역으로 옮기면 이 함수는 삭제하고 위의 주석처리한 Link 를 사용할 것.
            if (blockClick) {
              return;
            }
            const newUrl = `${INTERNAL_URL.JD_DETAIL}/${jd.id}`;
            const newWindow = window.open(newUrl, "_blank", "noopener, noreferrer");
            if (newWindow) newWindow.opener = null;
            if (ad) {
              jdAdClickEvent(jd.id);
            }
          }}
        />
        <div css={cssObj.likeButton}>
          <JdBookmark jdId={jd.id} isBookmarked={jd.isBookmark} />
        </div>
      </div>
      {/* </Link> */}
      <div css={cssObj.chipContainer}>
        <DDayChip endTime={jd.endTime} />
        <div css={cssObj.eduChip(jd.highschool)}>고</div>
        <div css={cssObj.eduChip(jd.college)}>초</div>
      </div>
      <strong css={cssObj.title}>
        <Link
          href={`${INTERNAL_URL.JD_DETAIL}/${jd.id}`}
          onClick={() => {
            if (ad) {
              jdAdClickEvent(jd.id);
            }
          }}
        >
          {jd.title}
        </Link>
      </strong>
      <div css={cssObj.descWrapper}>
        <p css={cssObj.desc}>{jd.company.name}</p>
        <p css={cssObj.desc}>{jd.place[0].split(" ").slice(0, 2).join(" ")}</p>
      </div>
    </div>
  );
};
