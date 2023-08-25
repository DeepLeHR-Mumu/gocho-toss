import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

import { cssObj as modalCssObj } from "shared-ui/deeple-ds/Modal/style";

export const cssObj = {
  wrapper: css`
    ${modalCssObj.layout}

    background-color: ${NEWCOLORS.WHITE};
    backdrop-filter: none;
    overflow: auto;
  `,

  contentsWrapper: css`
    width: 46.5rem;
    height: auto;
    padding-top: 1.5rem;
    padding-bottom: 1.8125rem;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
  `,

  closeIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    align-self: flex-end;
    color: ${NEWCOLORS.GRAY300};
    margin-bottom: 1.5rem;
    cursor: pointer;
  `,

  etcWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 4rem;
  `,

  recentWordWrapper: css`
    margin-top: 2.25rem;
  `,

  chipDelete: css`
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 0.25rem;
    color: ${NEWCOLORS.GRAY300};
    cursor: pointer;
  `,

  recentWordHeader: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.75rem;
  `,

  recentWordTitle: css`
    ${NEWTEXTS.TITLE12}
  `,

  recentWordDelete: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    cursor: pointer;
    ${NEWTEXTS.TITLE7};
  `,

  recentWordChipsWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  `,

  recommendationWordTitle: css`
    ${NEWTEXTS.TITLE12}
    margin-bottom: 1.75rem;
  `,

  recommendationWordChipsWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
  `,

  recommendationCompanyTitle: css`
    ${NEWTEXTS.TITLE12}
    margin-bottom: 1.75rem;
  `,

  recommendationCompanyList: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  recommendationJdTitle: css`
    ${NEWTEXTS.TITLE12}
    margin-bottom: 1.75rem;
  `,

  recommendationJdList: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,
};
