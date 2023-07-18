import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  partContainer: css`
    display: flex;
    flex-direction: column;
  `,

  subContainerTitle: css`
    ${TEXTS.TITLE11};
    display: block;
    margin-bottom: 2rem;
  `,

  subContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;

    input[type="file"] {
      position: absolute;
      width: 0;
      height: 0;
      padding: 0;
      overflow: hidden;
      border: 0;
    }
  `,

  tooltipWrapper: css`
    display: flex;
    align-items: center;
    position: relative;
  `,

  svg: css`
    margin-left: 0.5rem;
    color: ${NEWCOLORS.GRAY300};
  `,

  fileAddButton: css`
    display: flex;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem 2rem;
    margin-left: 1.25rem;
    background-color: ${NEWCOLORS.WHITE};
    cursor: pointer;
    ${TEXTS.TITLE4};
  `,
};
