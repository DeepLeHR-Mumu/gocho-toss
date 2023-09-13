import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import { DDayChip } from "shared-ui/deeple-ds";

import { JdBookmark } from "@/components";

import { URL } from "@/pages/constants";
import { JdCardProps } from "./type";
import { cssObj } from "./style";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd }) => (
    <div css={cssObj.cardWrapper}>
      <div css={cssObj.imageWrapper}>
        <Image src={jd.company.logoUrl} alt="회사 로고" fill />
        <div css={cssObj.likeButton}>
          <JdBookmark jdId={jd.id} marked={jd.isBookmark} />
        </div>
      </div>
      <div css={cssObj.chipContainer}>
        <DDayChip endTime={jd.endTime} />
        <div css={cssObj.eduChip(jd.high)}>고</div>
        <div css={cssObj.eduChip(jd.college)}>초</div>
      </div>
      <strong css={cssObj.title}>
        <Link href={`${URL.JDS_DETAIL}/${jd.id}`}>{jd.title}</Link>
      </strong>
      <div css={cssObj.descWrapper}>
        <p css={cssObj.desc}>{jd.company.name}</p>
        <p css={cssObj.desc}>{jd.placeArr[0].split(" ").slice(0, 2).join(" ")}</p>
      </div>
    </div>
  );
