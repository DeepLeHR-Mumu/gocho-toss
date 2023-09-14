import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";
import { MOBILE } from "shared-style/mediaQuery";

export const cssObj = {
  cardWrapper: (isButtonExist: boolean) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${isButtonExist ? "15.75rem" : "10.5rem"};
    height: ${isButtonExist ? "20rem" : "13.75rem"};
    padding: ${isButtonExist ? "2.25rem 1.5rem" : "1.5625rem 1.125rem"};
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    flex-shrink: 0;

    ${MOBILE} {
      width: ${isButtonExist ? "8.75rem" : "7.5rem"};
      height: ${isButtonExist ? "12.75rem" : "9rem"};
      padding: ${isButtonExist ? "1.25rem 1rem" : "1.25rem 1.5rem 1.25rem 1.4375rem"};
    }
  `,

  name: (isButtonExist: boolean) => css`
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${isButtonExist ? NEWTEXTS.TITLE13 : NEWTEXTS.TITLE12}

    ${MOBILE} {
      margin-top: 0.875rem;
      margin-bottom: 0;
      ${isButtonExist ? NEWTEXTS.TITLE6 : NEWTEXTS.TITLE5}
    }
  `,

  hashTags: (isButtonExist: boolean) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    word-wrap: break-word;
    word-break: break-all;
    color: ${NEWCOLORS.BLUEGRAY400};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${NEWTEXTS.TITLE7}

    ${MOBILE} {
      ${NEWTEXTS.TITLE1}
      ${isButtonExist ? "" : "display: none;"}
    }
  `,
};
