import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  partContainer: css`
    margin: 3rem 2rem 0;
  `,

  title: css`
    font-size: 1.25rem;
  `,

  inputContainer: css`
    margin-top: 2rem;
  `,

  inputLine: css`
    border: 1px solid ${COLORS.GRAY10};
    height: 2.5rem;
    margin-top: 0.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    width: 100%;
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  dateInputContainer: css`
    display: flex;
    align-items: flex-end;
    gap: 0 3rem;
    margin-top: 2rem;
  `,

  isAlwaysBlock: css`
    width: 15.375rem;
    height: 2.5rem;
    margin-top: 0.5rem;
    text-align: center;
    background-color: ${COLORS.GRAY70};
    color: ${COLORS.GRAY30};
    border-bottom: 1px solid ${COLORS.GRAY10};
  `,

  dateLabelContainer: css`
    display: flex;
    height: 2.5rem;
    gap: 0 3rem;
  `,

  label: css`
    cursor: pointer;
    display: flex;
    align-items: center;
  `,

  linkLabelContainer: css`
    display: flex;
    gap: 0 1rem;
  `,
};
