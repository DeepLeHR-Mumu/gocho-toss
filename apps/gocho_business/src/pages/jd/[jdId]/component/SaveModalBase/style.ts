import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  container: css`
    width: 50rem;
    padding: 2rem;
    background-color: ${COLOR.WHITE};
    border-radius: 1rem;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  header: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;

    > h3 {
      color: ${COLOR.BLACK};
      ${NEWTEXTS.TITLE1_B2832}
    }
  `,

  close: css`
    width: 2rem;
    height: 2rem;
  `,

  contentsWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.25rem;
  `,

  row: css`
    display: flex;
    gap: 0.75rem;

    > span {
      flex-basis: 5.125rem;
      flex-shrink: 0;
      ${NEWTEXTS.TITLE4_B1822}
    }

    > p {
      ${NEWTEXTS.BODY2_R1624}

      > span {
        color: ${COLOR.BLUE300};
      }
    }
  `,

  buttonGroup: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.25rem;
  `,

  loadingContentsWrapper: css`
    padding: 8.4375rem 1.25rem 7.5625rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    > p {
      text-align: center;

      > span {
        color: ${COLOR.BLUE300};
        ${NEWTEXTS.BODY2_R1624}
      }
    }
  `,

  completeContentsWrapper: css`
    padding: 6.9375rem 2rem 9.1875rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.625rem;

    > div {
      display: grid;
      place-items: center;

      > svg {
        width: 3.5rem;
        height: 3.5rem;
        color: ${COLOR.BLUE250};
      }
    }

    > p {
      text-align: center;
      ${NEWTEXTS.TITLE5_M1620}
    }
  `,

  errorDescription: css`
    padding: 1.25rem 0;
    ${NEWTEXTS.BODY2_R1624}
  `,

  errorButtonWrapper: css`
    padding-top: 1.25rem;
    display: flex;
    justify-content: flex-end;
  `,
};
