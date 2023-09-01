import Image from "next/image";

import { FunctionComponent } from "react";
import { cssObj } from "./style";

import LeftToday from "@/public/todayIcon/leftTodayIcon.svg";
import Today from "@/public/todayIcon/todayIcon.svg";

export const TodayIcon: FunctionComponent = () => {
  return (
    <p css={cssObj.iconWrap}>
      <Image src={LeftToday} alt="today" css={cssObj.left} />
      <Image src={Today} alt="today" css={cssObj.today} />
    </p>
  );
};
