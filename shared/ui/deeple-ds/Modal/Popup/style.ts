import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 46rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${COLOR.WHITE};
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
    color: ${COLOR.BLACK};
    ${NEWTEXTS.TITLE1_B2832}

    ${MOBILE} {
      ${NEWTEXTS.TITLE5_B1620}
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
    color: ${COLOR.BLACK};
    word-wrap: break-word;
    ${NEWTEXTS.BODY2_R1624};
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
