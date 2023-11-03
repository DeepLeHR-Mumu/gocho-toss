import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";
import { shorten } from "shared-style/common";

export const cssObj = {
  cardWrapper: (isButtonExist: boolean) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${isButtonExist ? "15.75rem" : "10.5rem"};
    height: ${isButtonExist ? "19.5rem" : "14.875rem"};
    padding: ${isButtonExist ? "1.5rem" : "1.5rem 1.125rem"};
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};
    flex-shrink: 0;
  `,

  linkBox: css``,

  name: (isButtonExist: boolean) => css`
    text-align: center;
    width: ${isButtonExist ? "13rem" : "10.5rem"};
    ${shorten()};

    margin-top: ${isButtonExist ? "1rem" : "0.75rem"};
    margin-bottom: 0.5rem;
    ${isButtonExist ? TEXT.TITLE2_B2428 : TEXT.TITLE4_B1822}
  `,

  hashTagWrapper: (isButtonExist: boolean) => css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${isButtonExist && "margin-bottom: 1rem;"}
  `,

  hashTags: css`
    color: ${COLOR.GRAY600};
    ${TEXT.BODY2_R1624}
  `,

  cursorPointer: css`
    cursor: pointer;
  `,
};
