import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  modalContainer: css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 80;
    width: 50rem;
    padding: 2rem;
    background-color: ${COLOR.WHITE};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    outline: none;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  titleWrapper: css`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  `,

  title: css`
    ${TEXT.TITLE4_B1822};
    display: block;
  `,

  closeButton: css`
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;

    > svg {
      color: ${COLOR.GRAY450};
      width: 2rem;
      height: 2rem;
    }
  `,

  contentWrapper: css`
    text-align: left;
    max-height: 50vh;
    overflow-y: scroll;
  `,

  text: css`
    ${TEXT.BODY2_R1624};
    color: ${COLOR.GRAY600};
  `,
};
