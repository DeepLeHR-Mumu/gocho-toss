import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 12.5rem;
    height: 3.5rem;
    padding: 1rem;

    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.75rem;

    ${TEXT.BODY2_R1624};
  `,

  placeholder: css`
    ${TEXT.BODY2_R1624};
    color: ${COLOR.GRAY450};
  `,

  item: css`
    ${TEXT.BODY2_R1624};
  `,
};
