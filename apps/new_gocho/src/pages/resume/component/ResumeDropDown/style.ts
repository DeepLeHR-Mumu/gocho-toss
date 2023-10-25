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

    ${TEXT.BODY2_R1624};

    & > div {
      width: 12.5rem;

      & > div {
        width: 12.8rem;

        & > input {
          width: 8rem;
        }
      }
    }
  `,

  placeholder: css`
    ${TEXT.BODY2_R1624};
    color: ${COLOR.GRAY450};
  `,

  item: css`
    ${TEXT.BODY2_R1624};
  `,
};
