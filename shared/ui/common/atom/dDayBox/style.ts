import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";

interface setDdayStyleCSS {
  (endTime: number): SerializedStyles;
}

const dateColor = (endTime: number) => {
  const endDate = new Date(endTime);

  const dDay = (endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);

  // D-day
  if (Math.floor(dDay) === 0) {
    return css`
      color: ${COLORS.GRAY100};
      background-color: ${COLORS.ERROR_RED40};
    `;
  }

  // 상시채용
  if (endDate.getFullYear() === 9999) {
    return css`
      background-color: #f2f2f2;
      color: ${COLORS.BLUE_FIRST40};
    `;
  }

  // 만료긴박
  if (dDay <= 14 && dDay >= -1) {
    return css`
      background-color: #f2f2f2;
      color: ${COLORS.BLUE_FIRST40};
    `;
  }

  // 만료 -> 현재시분초 보다 늦었을 경우
  if (endTime < new Date().getTime()) {
    return css`
      background-color: #f2f2f2;
      color: ${COLORS.GRAY60};
    `;
  }

  // 기본
  return css`
    background-color: #f2f2f2;
    color: ${COLORS.GRAY40};
  `;
};

export const setDdayStyleCSS: setDdayStyleCSS = (endTime) => {
  return css`
    font-size: 0.75rem;
    white-space: nowrap;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    min-width: 3.5rem;
    width: fit-content;
    padding: 0 1rem;
    height: 1.625rem;
    ${dateColor(endTime)}

    ${MOBILE} {
      font-size: 0.9rem;
    }
  `;
};
