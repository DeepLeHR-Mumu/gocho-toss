import { FunctionComponent } from "react";

import { dDayCalculator } from "shared-util/date";
import { getBetweenDate, getDateHours } from "./util";

import { container, desc } from "./style";
import { BookmarkProps } from "./type";

export const Bookmark: FunctionComponent<BookmarkProps> = ({ bookmarkData, dayHours }) => {
  return (
    <ul css={container}>
      {/* LATER null 제거하기, nul이 존재한다 === 구조가 잘못됐다 로 보면 될듯 */}
      {bookmarkData.map((bookmark) => {
        // LATER getDateHours 함수 안뺴도 될듯, 간단한 함수가 하는일이 복잡하지 않음
        const bookmarkHours = getDateHours(bookmark.endTime);
        if (dayHours === bookmarkHours) {
          return (
            // LATER 함수 내부에 또함수 호출은 안티패턴, 더 간단한 로직으로 변경
            <li css={desc(getBetweenDate(bookmark.endTime))} key={bookmark.id}>
              <span>{bookmark.title}</span>
              <span>{dDayCalculator(bookmark.endTime)}</span>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};
