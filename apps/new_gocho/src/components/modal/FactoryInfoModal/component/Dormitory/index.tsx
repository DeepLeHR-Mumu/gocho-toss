import Image from "next/image";

import dormImage from "@/public/image/factory/dorm.svg";

import { DormitoryProps } from "./type";
import { cssObj } from "./style";

export const Dormitory = ({ dormitory }: DormitoryProps) => (
  <div css={cssObj.wrapper}>
    <div css={cssObj.imageWrapper}>
      <Image src={dormImage} alt="dorm" />
    </div>
    <span css={cssObj.contentTitle}>기숙사</span>
    <span css={cssObj.content}>{dormitory ? "있음" : "없음"}</span>
  </div>
);
