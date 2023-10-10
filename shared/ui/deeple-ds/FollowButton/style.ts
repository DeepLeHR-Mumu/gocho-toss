import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  followButton: css`
    width: fit-content;
    border-radius: 1.875rem;
    padding: 0.75rem 1.25rem;
    ${NEWTEXTS.TITLE6_B1418}

    // NOTE 수정해야할지도
    ${MOBILE} {
      padding: 0.4375rem 0.875rem;
      ${NEWTEXTS.TITLE6_M1418};
    }
  `,
};
