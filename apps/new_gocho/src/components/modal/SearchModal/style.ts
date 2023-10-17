import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";
import { shorten } from "shared-style/common";

export const cssObj = {
  wrapper: css`
    background-color: ${COLOR.WHITE};
    backdrop-filter: none;
    overflow: auto;

    * ::-webkit-scrollbar {
      display: none;
    }
  `,

  contentWrapper: css`
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
    color: ${COLOR.GRAY450};
    margin-bottom: 1.5rem;
    cursor: pointer;
  `,

  etcWrapper: css`
    margin-top: 2.25rem;

    display: flex;
    flex-direction: column;
    gap: 4rem;
  `,

  chipBox: css`
    display: flex;
  `,

  chipText: css`
    max-width: 25rem;
    ${shorten()};
  `,

  chipDelete: css`
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 0.25rem;
    color: ${COLOR.GRAY450};
    cursor: pointer;
  `,

  recentWordHeader: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.75rem;
  `,

  recentWordTitle: css`
    ${TEXT.TITLE4_B1822}
  `,

  recentWordDelete: css`
    color: ${COLOR.GRAY600};
    cursor: pointer;
    ${TEXT.TITLE5_M1620};
  `,

  recentWordChipsWrapper: css`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  `,

  recommendationWordTitle: css`
    ${TEXT.TITLE4_B1822}
    margin-bottom: 1.75rem;
  `,

  recommendationWordChipsWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
  `,

  recommendationCompanyTitle: css`
    ${TEXT.TITLE4_B1822}
    margin-bottom: 1.75rem;
  `,

  recommendationCompanyList: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  recommendationJdTitle: css`
    ${TEXT.TITLE4_B1822}
    margin-bottom: 1.75rem;
  `,

  recommendationJdList: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,
};
