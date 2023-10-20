import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    align-items: center;
    height: 4.5rem;
    width: 100%;

    overflow: hidden;

    background-color: ${COLOR.GRAY50};

    border-bottom: 1px solid ${COLOR.GRAY200};

    & > div {
      height: 4.5rem;
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      color: ${COLOR.BLACK};
      ${TEXT.TITLE6_M1418};

      border-right: 1px solid ${COLOR.GRAY200};

      :last-of-type {
        border-right: none;
      }
    }
  `,

  gradeHeader: css`
    width: 2.25rem;
  `,

  dayHeader: css`
    width: 4.5rem;
  `,

  headerWrapper: css`
    width: 6.75rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    & > div {
      height: 50%;
    }
  `,

  header: css`
    width: 6.75rem;
    heghit: 2.25rem;
    border-bottom: 1px solid ${COLOR.GRAY200};

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  headerFlexBox: css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${TEXT.BODY3_R1422};
  `,

  special: css`
    width: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  inputWrapper: css`
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid ${COLOR.GRAY200};

    ${TEXT.TITLE6_M1418};

    height: 2.25rem;

    & > input {
      text-align: center;
      ${TEXT.BODY3_R1422};
      border-right: 1px solid ${COLOR.GRAY200};

      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      :last-of-type {
        width: 12.125rem;
        height: 2.25rem;
        text-align: left;

        padding-left: 0.75rem;

        border-right: none;
      }

      ::placeholder {
        color: ${COLOR.GRAY450};
      }
    }
  `,

  grade: css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid ${COLOR.GRAY200};

    width: 2.25rem;
    height: 2.25rem;
  `,

  dayInput: css`
    width: 4.5rem;
    height: 2.25rem;
  `,

  dataInput: css`
    width: 2.25rem;
    height: 2.25rem;
  `,

  specialInput: css``,
};
