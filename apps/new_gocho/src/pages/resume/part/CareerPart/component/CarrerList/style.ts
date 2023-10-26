import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    margin-bottom: 1rem;
  `,

  infoWrapper: css`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.75rem;

    & > p {
      ${TEXT.TITLE5_M1620};
    }
  `,

  infoDes: css`
    ${TEXT.BODY2_R1624};
    word-wrap: break-word;
    color: ${COLOR.GRAY700};
  `,

  retireHead: css`
    margin-top: 1rem;
    margin-bottom: 0.75rem;

    ${TEXT.TITLE5_M1620};
  `,

  payWrapper: css`
    margin-top: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > h3 {
      ${TEXT.TITLE5_M1620};
    }

    & > p {
      ${TEXT.BODY2_R1624};
    }
  `,
};
