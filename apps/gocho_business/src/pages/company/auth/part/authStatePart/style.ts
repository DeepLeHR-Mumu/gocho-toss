import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

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
    background-color: ${NEWCOLORS.WHITE};
    padding: 2rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  contentTitle: (giveMarginTop?: boolean) => css`
    width: fit-content;
    margin-bottom: 1.5rem;
    ${TEXTS.TITLE14};
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
        ${TEXTS.TITLE8};
        color: ${NEWCOLORS.BLACK};
      }

      p {
        ${TEXTS.BODY7}
        color: ${NEWCOLORS.BLACK};
      }
    `;

    const notCss = css`
      ${defaultCss}
      background-color: ${NEWCOLORS.GRAY50};
      border: 1px solid ${NEWCOLORS.GRAY200};
    `;

    const completeCss = css`
      ${defaultCss}
      background-color: ${NEWCOLORS.BLUE50};
      border: 1px solid ${NEWCOLORS.BLUE200};

      h4 {
        color: ${NEWCOLORS.BLUE300};
      }
    `;

    const waitCss = css`
      ${defaultCss}
      background-color: ${NEWCOLORS.GRAY100};
      border: 1px solid ${NEWCOLORS.GRAY450};

      h4,
      p {
        color: ${NEWCOLORS.GRAY600};
      }
    `;

    const rejectCss = css`
      ${defaultCss}
      background-color: ${NEWCOLORS.GRAY50};
      border: 1px solid ${NEWCOLORS.RED300};

      h4 {
        color: ${NEWCOLORS.RED300};
      }

      hr {
        border: 1px solid ${NEWCOLORS.GRAY200};
        width: 100%;
        margin: 1.25rem 0;
      }

      h5 {
        ${TEXTS.TITLE6}
        color: ${NEWCOLORS.RED300};
      }

      span {
        ${TEXTS.BODY7}
        color: ${NEWCOLORS.GRAY450};
        margin-left: 1rem;
      }

      ul {
        margin-top: 1.25rem;
        ${TEXTS.TITLE5}

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
      color: ${NEWCOLORS.BLUE250};
    }
  `,

  authProcessContainer: css`
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
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
      background: ${NEWCOLORS.BLUE100};
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }

    p:nth-of-type(1) {
      margin-top: 16px;
      margin-bottom: 8px;
      ${TEXTS.TITLE6}
    }

    p:nth-of-type(2),
    p:nth-of-type(3) {
      ${TEXTS.BODY2}
      color: ${NEWCOLORS.GRAY600};
    }
  `,

  line: css`
    border: 1px solid ${NEWCOLORS.BLUE100};
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
    background-color: ${NEWCOLORS.BLUE300};
    border-radius: 0.5rem;
    ${TEXTS.TITLE6};
    color: ${NEWCOLORS.WHITE};
    margin-top: 3rem;
    margin-bottom: 1.25rem;

    &:disabled {
      background-color: ${NEWCOLORS.GRAY200};
      color: ${NEWCOLORS.GRAY450};
      cursor: not-allowed;
    }
  `,
};
