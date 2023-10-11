import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";

import { COLOR } from "shared-style/color";
import { commonCssObj } from "../../style";

export const cssObj = {
  background: css`
    width: 100vw;
    height: 100vh;
    background-color: ${COLOR.WHITE};
  `,

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
    align-items: center;
    position: relative;
  `,

  title: css`
    ${commonCssObj.title}
    margin: 0;
  `,

  reviewNumber: css`
    margin-left: 1.5rem;
    ${NEWTEXTS.TITLE5_M1620}
  `,

  reviewButtonWrapper: css`
    position: absolute;
    right: 0;
  `,
};
