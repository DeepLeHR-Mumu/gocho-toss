import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  userInfoContainer: css`
    padding-bottom: 2rem;
    border-bottom: 1px solid ${NEWCOLORS.GRAY200};
  `,

  infoWrapper: css`
    display: flex;
    align-items: center;
    padding: 1rem 0;
  `,

  infoTitle: css`
    ${TEXTS.TITLE6};
    color: ${NEWCOLORS.GRAY600};
    width: 8rem;
  `,

  infoDesc: css`
    ${TEXTS.TITLE6};
  `,

  inputWrapper: css`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    :last-of-type {
      margin-bottom: 0;
    }
  `,

  inputTitle: css`
    display: flex;
    align-items: center;
    ${TEXTS.TITLE6};
    color: ${NEWCOLORS.GRAY600};
    width: 8rem;

    :after {
      content: "·";
      color: ${NEWCOLORS.BLUE300};
      line-height: 0.5;
      font-size: 2rem;
      font-weight: 700;
      margin-left: 0.5rem;
      margin-bottom: 0.25rem;
    }
  `,

  label: css`
    position: relative;
  `,

  showButton: css`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    font-size: 1.25rem;
    color: ${NEWCOLORS.GRAY450};
  `,

  errorDesc: css`
    ${TEXTS.TITLE5};
    height: 3.25rem;
    line-height: 3.25rem;
    margin-left: 1.5rem;
    color: ${NEWCOLORS.RED300};
  `,

  desc: css`
    ${TEXTS.TITLE5};
    color: ${NEWCOLORS.GRAY700};
    margin-top: 1.5rem;
  `,

  link: css`
    text-decoration: underline;
    color: ${NEWCOLORS.BLUE300};
    padding: 0 0.25rem;
  `,

  buttonWrapper: css`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  `,
};
