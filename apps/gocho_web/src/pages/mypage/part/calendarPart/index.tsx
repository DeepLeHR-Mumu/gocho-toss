import { FunctionComponent, useState } from "react";

import { useUserInfo } from "@api/auth";

import { Header } from "./component/header";
import { Body } from "./component/body";

import { container, title, desc } from "./style";
import { twoWeekDef } from "./type";

export const CalendarPart: FunctionComponent = () => {
  const { data: userInfoData } = useUserInfo();
  const now = new Date();

  const [currentDate, setCurrentDate] = useState<Date>(now);
  const [twoWeek, setTwoWeek] = useState<twoWeekDef[]>([]);

  return (
    <section css={container}>
      <h3 css={title}>
        MY 채용일정
        <span css={desc}>{userInfoData?.nickname}님 북마크한 공고 일정을 한 눈에 확인하세요.</span>
      </h3>

      <Header setCurrentDate={setCurrentDate} currentDate={currentDate} setTwoWeek={setTwoWeek} />
      <Body twoWeek={twoWeek} />
    </section>
  );
};
