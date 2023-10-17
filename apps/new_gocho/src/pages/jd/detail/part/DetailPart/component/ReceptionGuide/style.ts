import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

import { cssObj as subContainerCssObj } from "../DetailSubContainer/style";

export const cssObj = {
  subContainer: css`
    ${subContainerCssObj.subContainer}
    gap: 1.5rem;
  `,

  title: css`
    ${subContainerCssObj.title}
    margin-bottom: 0.25rem;
  `,

  processWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${COLOR.BLUE300};
      ${TEXT.TITLE4_M1822}
    }
  `,

  rightIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${COLOR.GRAY450};
  `,

  periodWrapper: css`
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    background-color: ${COLOR.GRAY50};
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  timeWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  `,

  startTime: css`
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE4_M1822}
  `,

  endTime: css`
    color: ${COLOR.BLACK};
    ${TEXT.TITLE4_M1822}
  `,

  contentWrapper: css`
    ${subContainerCssObj.contentWrapper}
    margin-top: 1.75rem;
  `,

  rowWrapper: css`
    ${subContainerCssObj.rowWrapper}
  `,
};
