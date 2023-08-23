import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

import { dDayChipColor } from "../style/color";

const chipColor = (dDay: number, year: string) => {
  // D-day
  if (Math.floor(dDay) === 0) {
    return dDayChipColor.fillRed;
  }

  // 상시채용
  if (year === "9999") {
    return dDayChipColor.fillBlue;
  }

  // 만료
  if (dDay < 0) {
    return dDayChipColor.fillGray;
  }

  // 기본
  return dDayChipColor.fillBlue;
};

export const cssObj = {
  dDayChip: (dDay: number, year: string) => css`
    width: fit-content;
    border-radius: 1.5rem;
    padding: 0.375rem 1rem;
    ${NEWTEXTS.TITLE6}
    ${chipColor(dDay, year)};

    ${MOBILE} {
      width: fit-content;
      border-radius: 1.5rem;
      padding: 0.25rem 0.5rem;
      ${NEWTEXTS.TITLE3}
    }
  `,
};
