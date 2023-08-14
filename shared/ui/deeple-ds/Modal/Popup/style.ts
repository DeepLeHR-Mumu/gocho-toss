import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 46rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${NEWCOLORS.WHITE};
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${MOBILE} {
      width: 18.5rem;
      padding: 1rem;
    }
  `,

  header: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${MOBILE} {
      margin-bottom: 1rem;
      //   justify-content: flex-end;
    }
  `,

  title: css`
    color: ${NEWCOLORS.BLACK};
    ${NEWTEXTS.TITLE14}

    ${MOBILE} {
      ${NEWTEXTS.TITLE9}
      position:relative;
      left: 50%;
      transform: translate(-50%, 0);
    }
  `,

  close: css`
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    ${MOBILE} {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,

  divider: css`
    margin: 1.25rem 0;

    ${MOBILE} {
      display: none;
    }
  `,

  description: css`
    width: 100%;
    color: ${NEWCOLORS.BLACK};
    word-wrap: break-word;
    ${NEWTEXTS.BODY4};
  `,

  buttonGroup: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1.25rem;
    gap: 1rem;

    ${MOBILE} {
      margin-top: 1rem;
      justify-content: center;
    }
  `,
};
