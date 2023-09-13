import Image from "next/image";

import { FunctionComponent } from "react";

import LeftToday from "@/public/todayIcon/leftTodayIcon.svg";
import Today from "@/public/todayIcon/todayIcon.svg";
import { cssObj } from "./style";

export const TodayIcon: FunctionComponent = () => (
    <p css={cssObj.iconWrap}>
      <Image src={LeftToday} alt="today" css={cssObj.left} />
      <Image src={Today} alt="today" css={cssObj.today} />
    </p>
  );
