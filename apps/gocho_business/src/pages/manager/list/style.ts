import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  spinner: css`
    position: relative;
    width: 100%;
    height: 30rem;
  `,

  contentWrapper: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  partContainer: css`
    flex-grow: 1;
    width: 59.5rem;
    min-height: 54.75rem;
    position: relative;
    background-color: ${COLOR.WHITE};
    padding: 2rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  pageTitle: css`
    width: fit-content;
    margin-bottom: 2rem;
    ${TEXT.TITLE1_B2832};
  `,

  companyInfoContainer: css`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  `,

  companyName: css`
    ${TEXT.TITLE2_B2428};
    color: ${COLOR.GRAY600};
  `,

  businessNumber: css`
    margin-left: 1rem;
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY500};

    > span {
      margin-left: 0.5rem;
      color: ${COLOR.GRAY700};
    }
  `,

  pageDesc: css`
    text-align: left;
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
    padding-bottom: 2rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  tableWrapper: css`
    background-color: ${COLOR.WHITE};
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    margin-bottom: 2rem;
  `,

  tableHeader: css`
    display: grid;
    grid-template-columns: 122px 144px 1fr 134px;
    justify-content: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
  `,

  header: (isCenter: boolean) => css`
    ${TEXT.TITLE5_B1620};
    text-align: ${isCenter ? "center" : "left"};
  `,

  rowContainer: css`
    display: grid;
    grid-template-columns: 122px 144px 1fr 134px;
    justify-content: center;
    border-bottom: 0.5px solid ${COLOR.GRAY200};

    :last-of-type {
      border-bottom: 0;
    }
  `,

  data: (isCenter: boolean) => css`
    ${TEXT.TITLE5_M1620};
    padding: 1rem 0;
    text-align: ${isCenter ? "center" : "left"};
  `,
};
