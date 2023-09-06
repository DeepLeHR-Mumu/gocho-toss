import Image from "next/image";

import dorm from "@/public/dorm.svg";

import { DormitoryProps } from "./type";
import { cssObj } from "./style";

export const Dormitory = ({ dormitory }: DormitoryProps) => {
  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.imageWrapper}>
        <Image src={dorm} alt="dorm" />
      </div>
      <span css={cssObj.contentTitle}>기숙사</span>
      <span css={cssObj.content}>{dormitory ? "있음" : "없음"}</span>
    </div>
  );
};
