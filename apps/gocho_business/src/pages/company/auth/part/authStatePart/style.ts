import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

import { AuthName } from "@/apis/manager/useManagerProfile/type";

export const cssObj = {
  spinner: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
  `,

  partContainer: css`
    flex-grow: 1;
    width: 59.5rem;
    position: relative;
    background-color: ${COLOR.WHITE};
    padding: 2rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  contentTitle: (giveMarginTop?: boolean) => css`
    width: fit-content;
    margin-bottom: 1.5rem;
    ${TEXT.TITLE1_B2832};
    ${giveMarginTop ? "margin-top: 3rem;" : ""}
  `,

  authStateContainer: (state: AuthName) => {
    const defaultCss = css`
      width: 100%;
      padding: 1.625rem 2rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 8px;
        ${TEXT.TITLE4_M1822};
        color: ${COLOR.BLACK};
      }

      p {
        ${TEXT.BODY3_R1422}
        color: ${COLOR.BLACK};
      }
    `;

    const notCss = css`
      ${defaultCss}
      background-color: ${COLOR.GRAY50};
      border: 1px solid ${COLOR.GRAY200};
    `;

    const completeCss = css`
      ${defaultCss}
      background-color: ${COLOR.BLUE50};
      border: 1px solid ${COLOR.BLUE200};

      h4 {
        color: ${COLOR.BLUE300};
      }
    `;

    const waitCss = css`
      ${defaultCss}
      background-color: ${COLOR.GRAY100};
      border: 1px solid ${COLOR.GRAY450};

      h4,
      p {
        color: ${COLOR.GRAY600};
      }
    `;

    const rejectCss = css`
      ${defaultCss}
      background-color: ${COLOR.GRAY50};
      border: 1px solid ${COLOR.RED300};

      h4 {
        color: ${COLOR.RED300};
      }

      hr {
        border: 1px solid ${COLOR.GRAY200};
        width: 100%;
        margin: 1.25rem 0;
      }

      h5 {
        ${TEXT.TITLE5_M1620}
        color: ${COLOR.RED300};
      }

      span {
        ${TEXT.BODY3_R1422}
        color: ${COLOR.GRAY450};
        margin-left: 1rem;
      }

      ul {
        margin-top: 1.25rem;
        ${TEXT.TITLE5_M1620}

        li::before {
          content: " · ";
        }

        li {
          margin-bottom: 0.6875rem;
        }

        li:last-child {
          margin-bottom: 0;
        }
      }
    `;

    switch (state) {
      case "인증완료":
        return completeCss;
      case "인증대기":
        return waitCss;
      case "인증반려":
        return rejectCss;
      case "미인증":
      default:
        return notCss;
    }
  },

  factoryIcon: css`
    margin-right: 1.25rem;
  `,

  additionalDescription: css`
    margin-top: 1.5rem;

    li::before {
      content: " · ";
    }

    li {
      margin-bottom: 1rem;
    }

    li:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: underline;
      color: ${COLOR.BLUE250};
    }
  `,

  authProcessContainer: css`
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    padding: 1.5rem 3.18rem 1.5rem 2.5625rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  `,

  eachProcess: css`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: ${COLOR.BLUE100};
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }

    p:nth-of-type(1) {
      margin-top: 16px;
      margin-bottom: 8px;
      ${TEXT.TITLE5_M1620}
    }

    p:nth-of-type(2),
    p:nth-of-type(3) {
      ${TEXT.BODY3_R1422}
      color: ${COLOR.GRAY600};
    }
  `,

  line: css`
    border: 1px solid ${COLOR.BLUE100};
    height: 1px;
    width: 70%;
    position: absolute;
    top: 2.5rem;
    left: 8rem;
    margin: 0;
  `,

  footerContainer: css`
    display: flex;
    justify-content: center;
    aligh-items: center;
  `,

  authButton: css`
    width: 11.25rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    background-color: ${COLOR.BLUE300};
    border-radius: 0.5rem;
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.WHITE};
    margin-top: 3rem;
    margin-bottom: 1.25rem;

    &:disabled {
      background-color: ${COLOR.GRAY200};
      color: ${COLOR.GRAY450};
      cursor: not-allowed;
    }
  `,
};
