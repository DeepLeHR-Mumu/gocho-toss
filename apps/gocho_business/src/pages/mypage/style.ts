import { css } from "@emotion/react";
import { COLORS, NEWCOLORS } from "shared-style/color";
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
    color: ${NEWCOLORS.BLUEGRAY400};
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
    color: ${NEWCOLORS.BLUEGRAY400};
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
    color: ${NEWCOLORS.GRAY300};
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
    color: ${NEWCOLORS.BLUEGRAY500};
    margin-top: 1.5rem;
  `,

  link: css`
    text-decoration: underline;
    color: ${NEWCOLORS.BLUE300};
    padding: 0 0.25rem;
  `,

  submitButton: (isActive: boolean) => css`
    width: 100%;
    font-size: 1rem;
    color: ${COLORS.GRAY100};
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 0;
    line-height: 1;
    max-width: 25rem;
    margin: 3rem auto 0;
    background-color: ${isActive ? COLORS.BLUE_FIRST40 : COLORS.GRAY65};
  `,
};
