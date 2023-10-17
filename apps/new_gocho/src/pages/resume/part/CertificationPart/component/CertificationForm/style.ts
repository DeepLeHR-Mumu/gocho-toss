import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    margin-top: 2rem;
    display: flex;
    gap: 1.75rem;
    flex-direction: column;
  `,

  inputWrapper: css`
    display: flex;
    align-items: center;
    position: relative;

    & > p {
      width: 5.625rem;
      ${TEXT.TITLE5_M1620};
    }
  `,

  iconInput: css`
    width: 31.825rem;
  `,

  inputWidth: css`
    width: 33.825rem;
  `,

  buttonWrapper: css`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1.25rem;
  `,

  keywordWrapper: css`
    position: absolute;
    background-color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.BLACK};
    border-radius: 1rem;
    padding: 0.5rem 0rem;

    width: 35.825rem;
    max-height: 13.5rem;

    overflow: scroll;
    top: 70px;
    left: 11%;

    z-index: 10;
  `,

  resultItem: css`
    height: 2.5rem;
    padding: 1rem;
    ${TEXT.BODY2_R1624};
  `,

  highlight: css`
    color: ${COLOR.BLUE300};
    height: 2.5rem;
    padding: 1rem;
    ${TEXT.BODY2_R1624};
  `,
};
