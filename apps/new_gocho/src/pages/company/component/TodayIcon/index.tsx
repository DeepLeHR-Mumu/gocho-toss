import Image from "next/image";

import { FunctionComponent } from "react";

import leftToday from "@/public/image/todayIcon/leftTodayIcon.svg";
import today from "@/public/image/todayIcon/todayIcon.svg";
import { cssObj } from "./style";

export const TodayIcon: FunctionComponent = () => (
  <p css={cssObj.iconWrap}>
    <Image src={leftToday} alt="today" css={cssObj.left} />
    <Image src={today} alt="today" css={cssObj.today} />
  </p>
);
