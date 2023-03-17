import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

const defaultMinMaxCSS = css`
  width: 5rem;
  padding: 0 1rem;
  border-radius: 0.625rem;
  height: 2.5rem;
  background-color: ${COLORS.GRAY100};
  border: 1px solid ${COLORS.GRAY10};
  font-size: 1rem;
  color: ${COLORS.GRAY10};
`;

export const cssObj = {
  wrapper: css`
    border-bottom: 1px solid ${COLORS.GRAY70};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  `,
  title: css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${COLORS.GRAY10};
    margin-bottom: 1rem;
    display: block;
  `,
  container: css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0 3rem;
  `,
  formBox: css`
    width: 50%;
  `,
  requiredTitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLORS.GRAY20};
    margin-bottom: 1rem;
    display: block;
    padding-left: 0.5rem;
    border-left: 3px solid ${COLORS.BLUE_SECOND70};
  `,
  noRequiredTitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLORS.GRAY20};
    margin-bottom: 1rem;
    display: block;
    padding-left: 0.5rem;
    border-left: 3px solid ${COLORS.ERROR_YELLOW50};
  `,
  flexBox: css`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
  `,
  radioDesc: css`
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    font-weight: 400;
    padding-left: 0.5rem;
  `,
  textareaBox: css`
    display: flex;
    flex-direction: column;
  `,
  textareaWarning: css`
    background-color: ${COLORS.BLUE_SECOND70};
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    color: ${COLORS.BLUE_FIRST40};
    width: fit-content;
    margin: 0.25rem 0;
  `,
  textarea: css`
    width: 100%;
    padding: 1rem;
    max-width: 40rem;
    border-radius: 0.625rem;
    border: 1px solid ${COLORS.GRAY10};
    font-size: 1rem;
    color: ${COLORS.GRAY10};
    min-height: 8rem;
  `,
  minMaxLabel: css`
    display: flex;
    align-items: center;
  `,
  minMaxInput: css`
    ${defaultMinMaxCSS};
  `,
  disabledMinMaxInput: css`
    ${defaultMinMaxCSS};
    background-color: ${COLORS.GRAY80};
    border: 0;
  `,
  minMaxDesc: css`
    font-size: 0.875rem;
    padding: 0 1rem;
    color: ${COLORS.GRAY10};
  `,
};
