import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  thumbsUpWrapper: (isClicked: boolean) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${isClicked ? COLOR.BLUE300 : COLOR.GRAY600};

    svg {
      color: ${isClicked ? COLOR.BLUE300 : COLOR.GRAY600};
    }
  `,

  thumbsDownWrapper: (isClicked: boolean) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${isClicked ? COLOR.RED200 : COLOR.GRAY600};

    svg {
      color: ${isClicked ? COLOR.RED200 : COLOR.GRAY600};
    }
  `,

  large: css`
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      ${TEXT.TITLE5_M1620}
    }
  `,

  small: css`
    svg {
      width: 1rem;
      height: 1rem;
    }

    span {
      ${TEXT.TITLE7_M1218}
    }
  `,
};
