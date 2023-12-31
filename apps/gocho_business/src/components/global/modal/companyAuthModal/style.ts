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
    outline: none;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,

  titleWrapper: css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
    margin-bottom: 1.25rem;
  `,

  title: css`
    ${TEXT.TITLE1_B2832};
    display: block;
  `,

  closeButton: css`
    > svg {
      color: ${COLOR.GRAY450};
      width: 2rem;
      height: 2rem;
    }
  `,

  desc: css`
    margin-bottom: 1.25rem;
    ${TEXT.BODY2_R1624};
  `,

  descWrapper: css`
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    padding: 1.5rem;
  `,

  descTitle: css`
    display: block;
    ${TEXT.TITLE4_B1822};
    margin-bottom: 0.5rem;
  `,

  grid: css`
    width: 40rem;
    height: 6.25rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 190px 260px 190px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,

  numberTitle: css`
    grid-row-start: 1;
    grid-row-end: 2;
    border-radius: 1rem 0 0 0;
    border-top: 1px solid ${COLOR.GRAY200};
    border-left: 1px solid ${COLOR.GRAY200};
    ${TEXT.TITLE5_M1620}
    background-color: ${COLOR.GRAY50};
    color: ${COLOR.GRAY600};
  `,

  number: css`
    grid-row-start: 2;
    grid-row-end: 3;
    border-radius: 0 0 0 1rem;
    border-bottom: 1px solid ${COLOR.GRAY200};
    border-left: 1px solid ${COLOR.GRAY200};
    ${TEXT.TITLE5_M1620}
    background-color: ${COLOR.BLUE100};
    color: ${COLOR.BLUE400};
  `,

  centerTitle: css`
    grid-row-start: 1;
    grid-row-end: 3;
    border: 1px solid ${COLOR.GRAY200};
    ${TEXT.TITLE5_M1620}
    color: ${COLOR.GRAY600};
    flex-direction: column;
  `,

  smallDesc: css`
    ${TEXT.TITLE7_M1218}
  `,

  dueTitle: css`
    grid-row-start: 1;
    grid-row-end: 2;
    border-radius: 0 1rem 0 0;
    border-top: 1px solid ${COLOR.GRAY200};
    border-right: 1px solid ${COLOR.GRAY200};
    ${TEXT.TITLE5_M1620}
    background-color: ${COLOR.GRAY50};
    color: ${COLOR.GRAY500};
  `,

  due: css`
    grid-row-start: 2;
    grid-row-end: 3;
    border-radius: 0 0 1rem 0;
    border-bottom: 1px solid ${COLOR.GRAY200};
    border-right: 1px solid ${COLOR.GRAY200};
    ${TEXT.TITLE5_M1620}
    background-color: ${COLOR.GRAY100};
    color: ${COLOR.GRAY500};
  `,

  businessLink: css`
    ${TEXT.UNDERLINE1_M1620};
    color: ${COLOR.BLUE250};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    > svg {
      color: ${COLOR.BLUE250};
      transform: rotate(45deg);
      margin-left: 0.25rem;
    }
  `,

  buttonWrapper: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 1.25rem;
  `,
};
