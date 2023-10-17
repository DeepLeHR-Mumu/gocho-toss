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
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  `,

  title: css`
    ${TEXT.TITLE1_B2832};
    display: block;
  `,

  closeButton: css`
    > svg {
      width: 2rem;
      height: 2rem;
    }
  `,

  desc: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY600};
    width: 100%;
    text-align: left;
    margin-bottom: 1.5rem;
  `,

  inputWrapper: css`
    position: relative;
  `,

  noCertiSearchDesc: css`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ${TEXT.BODY3_R1422};
    color: ${COLOR.GRAY600};
  `,

  addCertiButton: css`
    ${TEXT.TITLE5_M1620};
    color: ${COLOR.GRAY600};
    width: 100%;
    justify-content: flex-start;
    padding: 0 1rem;
    height: 2.5rem;
  `,

  selectedCertiWrapper: css`
    width: 46rem;
    height: 8.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    background-color: ${COLOR.GRAY50};
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.75rem;
    margin-top: 1.25rem;
  `,

  selectedCertiButton: css`
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 1.5rem;
    background-color: ${COLOR.BLUE100};
    color: ${COLOR.BLUE300};
  `,

  smallDeleteButton: css`
    cursor: pointer;
    > svg {
      width: 1.25rem;
      height: 1.25rem;
    }
    color: ${COLOR.BLUE300};
  `,

  buttonContainer: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2rem;
    gap: 0 1rem;
  `,
};
