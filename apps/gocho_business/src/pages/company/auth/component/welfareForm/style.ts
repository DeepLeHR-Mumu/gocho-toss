import { css } from "@emotion/react";

import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

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
    color: ${isMine ? NEWCOLORS.BLUEGRAY200 : NEWCOLORS.BLACK};
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
    border-bottom: 1px solid ${NEWCOLORS.BLUEGRAY100};
    background-color: ${NEWCOLORS.WHITE};
  `,

  noData: css`
    ${TEXTS.TITLE4};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${NEWCOLORS.BLUEGRAY200};
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

  welfareInput: (isDisabled: boolean) => css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${NEWCOLORS.GRAY200};
    border-radius: 0.75rem;
    color: ${NEWCOLORS.BLACK};
    height: 3.25rem;
    background-color: ${isDisabled ? `${NEWCOLORS.GRAY100}` : `${NEWCOLORS.WHITE}`};
    padding: 0 1rem;
    font-weight: 400;

    ::placeholder {
      ${TEXTS.TITLE5};
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  deleteButton: css`
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${NEWCOLORS.BLACK};
    background-color: ${NEWCOLORS.BLUEGRAY100};
    z-index: 20;
  `,
};
