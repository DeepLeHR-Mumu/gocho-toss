import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  welFareWrapper: css`
    display: flex;
    align-items: flex-start;
    margin-top: 1.25rem;
  `,

  inputContainer: css`
    flex-grow: 1;
  `,

  title: (isMine: boolean) => css`
    font-size: 1rem;
    font-weight: 400;
    color: ${isMine ? COLOR.GRAY400 : COLOR.BLACK};
    margin-bottom: 0.5rem;
    display: block;
  `,

  hidden: css`
    display: none;
  `,

  writeBox: css`
    position: relative;
    margin-bottom: 0.25rem;
  `,

  buttonLine: css`
    align-items: center;
    width: 100%;
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid ${COLOR.GRAY300};
    background-color: ${COLOR.WHITE};
  `,

  noData: css`
    ${TEXT.TITLE6_M1418};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR.GRAY400};
    padding: 1rem 0;
  `,

  welfareList: css`
    display: flex;
  `,

  inputLabel: css`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    gap: 0 1rem;
  `,

  welfareInput: css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.75rem;
    color: ${COLOR.BLACK};
    height: 3.25rem;
    background-color: ${COLOR.WHITE};
    padding: 0 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXT.TITLE5_M1620};
      color: ${COLOR.GRAY450};
    }
  `,

  deleteButton: css`
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLOR.BLACK};
    background-color: ${COLOR.GRAY300};
    z-index: 20;
  `,
};
