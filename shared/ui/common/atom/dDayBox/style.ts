import { css, SerializedStyles } from "@emotion/react";
import { COLORS } from "@style/constant";

interface setDdayStyleCSS {
  (endTime: number): SerializedStyles;
}

const dateColor = (endTime: number) => {
  const endDate = new Date(endTime);

  const dDay = (endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);

  if (endDate.getFullYear() === 9999) {
    return css`
      background-color: ${COLORS.BLUE_SECOND30};
      color: ${COLORS.BLUE_FIRST40};
    `;
  }

  if (dDay < 3 && dDay >= -1) {
    return css`
      background-color: ${COLORS.ERROR_RED40};
      color: ${COLORS.GRAY100};
    `;
  }

  // 만료 -> 현재시분초 보다 늦었을 경우
  if (endTime < new Date().getTime()) {
    return css`
      background-color: ${COLORS.GRAY10};
      color: ${COLORS.GRAY70};
    `;
  }

  return css`
    background-color: ${COLORS.GRAY90};
    color: ${COLORS.BLUE_FIRST30};
  `;
};

export const setDdayStyleCSS: setDdayStyleCSS = (endTime) => {
  return css`
    font-size: 0.75rem;
    width: fit-content;
    white-space: nowrap;
    font-weight: 700;
    border-radius: 1rem;
    padding: 0.3rem 0.5rem;
    ${dateColor(endTime)}
  `;
};
