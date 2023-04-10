import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

import { subPageTitle } from "@/style/commonStyles";

export const cssObj = {
  title: css`
    ${subPageTitle};
  `,

  formContainer: css`
    width: 40%;
    margin: 0 auto;
  `,

  inputContainer: css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  `,

  inputBox: css`
    flex-grow: 1;
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: 2rem;
    padding: 0.25rem 0.5rem;
    margin-right: 1rem;
  `,

  button: css`
    background-color: ${COLORS.BLUE_NEON50};
    color: ${COLORS.GRAY100};
    font-size: 0.75rem;
    width: fit-content;
    padding: 0.25rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    border-radius: 0.25rem;
  `,

  errorMsgBox: css`
    color: ${COLORS.BLUE_FIRST40};
    font-weight: 500;
    text-align: center;
    margin-top: 1rem;
  `,

  companySelectBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1rem;

    p {
      font-size: 1rem;
      color: ${COLORS.GRAY20};
      padding: 0.25rem;
    }
  `,

  point: css`
    color: ${COLORS.BLUE_FIRST40};
    font-weight: 500;
  `,

  buttonBox: css`
    width: fit-content;
    margin: 2rem auto 0;
  `,
};
