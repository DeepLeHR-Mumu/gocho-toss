import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  factoryChipWrapper: css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  `,

  factoryInfoWrapper: css`
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  `,

  factorySummary: css`
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY100};
  `,

  infoTitleWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1.5rem;
  `,

  mapIcon: css`
    width: 1.5rem;
    height: 1.5rem;
  `,

  infoTitle: css`
    ${NEWTEXTS.TITLE13}
  `,

  infoSubtitle: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    ${NEWTEXTS.TITLE10}
  `,

  summaryWrapper: css`
    display: flex;
    flex-direction: row;
    width: 32rem;
    justify-content: center;
    gap: 2.5rem;
  `,

  factoryDescription: css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h3 {
      margin-bottom: 1.25rem;
      ${NEWTEXTS.TITLE12};
    }

    > span {
      margin-bottom: 2.5rem;
      ${NEWTEXTS.TITLE10}
    }

    > p {
      ${NEWTEXTS.BODY6}
    }
  `,

  copy: css`
    display: inline-block;
    margin-left: 1rem;
    color: ${NEWCOLORS.BLUE250};
    ${NEWTEXTS.TITLE11}
  `,
};
