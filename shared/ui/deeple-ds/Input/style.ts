import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `,

  label: css`
    ${NEWTEXTS.TITLE9}
    color: ${NEWCOLORS.BLUEGRAY400}
  `,

  input: css`
    flex: 1;
    ${NEWTEXTS.TITLE7}

    :focus {
      outline: none;
    }

    :disabled {
      color: ${NEWCOLORS.GRAY300};
      cursor: not-allowed;
    }

    ::placeholder {
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  inputWrapper: (disabled?: boolean) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    padding: 1rem;

    &:focus-within {
      border-color: ${NEWCOLORS.BLUE200};
    }

    ${disabled
      ? css`
          background-color: ${NEWCOLORS.GRAY200};
          cursor: not-allowed;
        `
      : ""}
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  error: css`
    border-color: ${NEWCOLORS.RED300};

    &:focus-within {
      border-color: ${NEWCOLORS.RED300};
    }
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  errorMessage: css`
    color: ${NEWCOLORS.RED300};
    ${NEWTEXTS.TITLE1}
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  success: css`
    border-color: ${NEWCOLORS.BLUE300};

    &:focus-within {
      border-color: ${NEWCOLORS.BLUE300};
    }
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  successMessage: css`
    color: ${NEWCOLORS.BLUE300};
    ${NEWTEXTS.TITLE1}
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
