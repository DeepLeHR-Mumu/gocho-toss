import { FunctionComponent } from "react";
import Image from "next/image";

import { DDayChip } from "shared-ui/deeple-ds";

import { JdCardProps } from "./type";
import { cssObj } from "./style";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd }) => {
  return (
    <div css={cssObj.cardWrapper}>
      <div css={cssObj.imageWrapper}>
        <Image src={jd.company.logoUrl} alt="회사 로고" fill />
      </div>
      <div css={cssObj.chipContainer}>
        <DDayChip endTime={jd.endTime} />
        <div css={cssObj.eduChip(jd.high)}>고</div>
        <div css={cssObj.eduChip(jd.college)}>초</div>
      </div>
      <strong css={cssObj.title}>{jd.title}</strong>
      <p css={cssObj.desc}>{jd.company.name}</p>
      <p css={cssObj.desc}>{jd.placeArr[0].split(" ").slice(0, 2).join(" ")}</p>
    </div>
  );
};
