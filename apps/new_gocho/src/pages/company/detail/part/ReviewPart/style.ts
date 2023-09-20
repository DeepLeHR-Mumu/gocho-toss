import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";

import { commonCssObj } from "../../style";

export const cssObj = {
  wrapper: css`
    padding-top: 2.5rem;
    padding-bottom: 7.5rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,

  box: css`
    gap: 2.25rem;
    ${commonCssObj.box}
  `,

  titleWrapper: css`
    display: flex;
    flex-direction: row;
    position: relative;
  `,

  title: css`
    ${commonCssObj.title}
    margin: 0;
  `,

  reviewNumber: css`
    align-self: flex-end;
    margin-left: 1.5rem;
    ${NEWTEXTS.TITLE7}
  `,

  reviewButtonWrapper: css`
    position: absolute;
    right: 0;
  `,
};
