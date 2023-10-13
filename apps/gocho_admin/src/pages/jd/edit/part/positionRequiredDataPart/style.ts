import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

const defaultMinMaxCSS = css`
  width: 5rem;
  padding: 0 1rem;
  border-radius: 0.625rem;
  height: 2.5rem;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY900};
  font-size: 1rem;
  color: ${COLOR.GRAY900};
`;

export const cssObj = {
  wrapper: css`
    border-bottom: 1px solid ${COLOR.GRAY300};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  `,
  title: css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${COLOR.GRAY900};
    margin-bottom: 1rem;
    display: block;
  `,
  container: css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0 3rem;
  `,
  formBox: css`
    width: 100%;
    max-width: 40rem;
    margin-bottom: 2rem;

    :last-of-type {
      margin-bottom: 0;
    }
  `,
  requiredTitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLOR.GRAY700};
    margin-bottom: 1rem;
    display: block;
    padding-left: 0.5rem;
    border-left: 3px solid ${COLOR.BLUE200};
  `,
  noRequiredTitle: css`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLOR.GRAY700};
    margin-bottom: 1rem;
    display: block;
    padding-left: 0.5rem;
    border-left: 3px solid ${COLOR.YELLOW100};
  `,
  flexBox: css`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
  `,
  radioDesc: css`
    font-size: 0.875rem;
    color: ${COLOR.GRAY900};
    font-weight: 400;
    padding-left: 0.5rem;
  `,
  textareaBox: css`
    display: flex;
    flex-direction: column;
  `,
  textareaWarning: css`
    background-color: ${COLOR.BLUE200};
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    color: ${COLOR.BLUE300};
    width: fit-content;
    margin: 0.25rem 0;
  `,
  textarea: css`
    width: 100%;
    padding: 1rem;
    max-width: 40rem;
    border-radius: 0.625rem;
    border: 1px solid ${COLOR.GRAY900};
    font-size: 1rem;
    color: ${COLOR.GRAY900};
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
    background-color: ${COLOR.GRAY100};
    border: 0;
  `,
  minMaxDesc: css`
    font-size: 0.875rem;
    padding: 0 1rem;
    color: ${COLOR.GRAY900};
  `,
};
