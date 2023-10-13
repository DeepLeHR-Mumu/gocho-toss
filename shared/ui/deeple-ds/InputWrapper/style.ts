import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    position: relative;
  `,

  label: css`
    ${TEXT.TITLE5_B1620}
    color: ${COLOR.GRAY600}
  `,

  inputWrapper: (disabled?: boolean) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid ${COLOR.GRAY200};
    padding: 1rem;

    &:focus-within {
      border-color: ${COLOR.BLUE200};
    }

    ${disabled
      ? css`
          background-color: ${COLOR.GRAY200};
          cursor: not-allowed;
        `
      : ""}
  `,

  message: css`
    position: absolute;
    bottom: -1.25rem;
    left: 0.25rem;
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  error: css`
    border-color: ${COLOR.RED300};

    &:focus-within {
      border-color: ${COLOR.RED300};
    }
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  errorMessage: css`
    color: ${COLOR.RED300};
    ${TEXT.TITLE7_M1218}
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  success: css`
    border-color: ${COLOR.BLUE300};

    &:focus-within {
      border-color: ${COLOR.BLUE300};
    }
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  successMessage: css`
    color: ${COLOR.BLUE300};
    ${TEXT.TITLE7_M1218}
  `,

  underLine: (disabled?: boolean) => css`
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding: 0.25rem 0 0.75rem 0;

    ${disabled
      ? css`
          background-color: transparent;
          cursor: not-allowed;
        `
      : ""}
  `,
};
