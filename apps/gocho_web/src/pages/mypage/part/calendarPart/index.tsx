import { FunctionComponent, useState } from "react";

import { useUserProfile } from "shared-api/auth";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { Header } from "./component/header";
import { Body } from "./component/body";

import { container, title, desc } from "./style";
import { twoWeekDef } from "./type";

export const CalendarPart: FunctionComponent = () => {
  const { data: userInfoData } = useUserProfile();
  const now = new Date();

  const [currentDate, setCurrentDate] = useState<Date>(now);
  const [twoWeek, setTwoWeek] = useState<twoWeekDef[]>([]);

  return (
    <section css={container}>
      <InvisibleH2 title="나의 채용 일정" />
      <strong css={title}>
        MY 채용일정
        <span css={desc}>{userInfoData?.nickname}님 북마크한 공고 일정을 한 눈에 확인하세요.</span>
      </strong>

      <Header setCurrentDate={setCurrentDate} currentDate={currentDate} setTwoWeek={setTwoWeek} />
      <Body twoWeek={twoWeek} />
    </section>
  );
};
