import { FunctionComponent } from "react";

import { useUserProfile } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { dummyArrCreator } from "shared-util";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { Bookmark } from "../bookmark";

import { weekDayCreator, getDateHours } from "./util";
import { BodyProps } from "./type";
import { skeletonContainer, weekdayContainer, weekdayCSS, table, todayCSS, dayCSS } from "./style";

export const Body: FunctionComponent<BodyProps> = ({ twoWeek }) => {
  const { data: userInfoData } = useUserProfile();
  const todayHours = getDateHours(new Date());

  const { data: userJobBookmarkArrData, isLoading } = useUserJobBookmarkArr({
    userId: userInfoData?.id,
  });

  if (!userInfoData || isLoading) {
    return (
      <div css={skeletonContainer}>
        <SkeletonBox />
      </div>
    );
  }

  if (!userJobBookmarkArrData) {
    return (
      <>
        <ul css={weekdayContainer}>
          {dummyArrCreator(7).map((weekday) => {
            return (
              <li key={weekday}>
                <p css={weekdayCSS(weekday)}>{weekDayCreator(weekday)}</p>
              </li>
            );
          })}
        </ul>

        <ul css={table}>
          {twoWeek.map((day) => {
            const dayHours = getDateHours(day.date);
            const date = new Date(day.date).getDate();

            return (
              <li key={dayHours}>
                {todayHours === dayHours && (
                  <p css={todayCSS}>
                    today
                    <span>{date}</span>
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  const bookmarkData = userJobBookmarkArrData.filter((jobBookmarkData) => {
    return twoWeek.some((day) => {
      return getDateHours(day.date) === getDateHours(jobBookmarkData.endTime);
    });
  });

  return (
    <>
      <ul css={weekdayContainer}>
        {dummyArrCreator(7).map((weekday) => {
          return (
            <li key={weekday}>
              <p css={weekdayCSS(weekday)}>{weekDayCreator(weekday)}</p>
            </li>
          );
        })}
      </ul>

      <ul css={table}>
        {twoWeek.map((day) => {
          const dayHours = getDateHours(day.date);
          const date = new Date(day.date).getDate();

          return (
            <li key={dayHours}>
              {todayHours === dayHours && (
                <p css={todayCSS}>
                  today
                  <span>{date}</span>
                </p>
              )}

              {todayHours !== dayHours && <p css={dayCSS}>{date}</p>}

              <Bookmark bookmarkData={bookmarkData} dayHours={dayHours} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
