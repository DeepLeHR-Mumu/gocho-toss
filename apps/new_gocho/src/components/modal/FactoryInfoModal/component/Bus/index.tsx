import Image from "next/image";

import busImage from "@/public/image/factory/bus.svg";

import { BusProps } from "./type";
import { cssObj } from "./style";

export const Bus = ({ bus }: BusProps) => (
  <div css={cssObj.wrapper}>
    <div css={cssObj.imageWrapper}>
      <Image src={busImage} alt="bus" />
    </div>
    <span css={cssObj.contentTitle}>통근버스</span>
    <span css={cssObj.content}>{bus ? "있음" : "없음"}</span>
  </div>
);
