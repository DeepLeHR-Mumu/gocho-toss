import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

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
      color: ${NEWCOLORS.BLUE300};
      ${NEWTEXTS.TITLE11}
    }
  `,

  rightIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${NEWCOLORS.GRAY300};
  `,

  periodWrapper: css`
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    background-color: ${NEWCOLORS.GRAY50};
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
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE10}
  `,

  endTime: css`
    color: ${NEWCOLORS.BLACK};
    ${NEWTEXTS.TITLE11}
  `,

  contentWrapper: css`
    ${subContainerCssObj.contentWrapper}
    margin-top: 1.75rem;
  `,

  rowWrapper: css`
    ${subContainerCssObj.rowWrapper}
  `,
};
