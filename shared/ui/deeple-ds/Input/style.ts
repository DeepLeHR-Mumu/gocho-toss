import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `,

  label: css`
    ${TEXTS.TITLE7}
    color: ${NEWCOLORS.BLUEGRAY400}
  `,

  input: css`
    ${TEXTS.TITLE5}
    border-radius: 0.75rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    padding: 1rem;

    &::placeholder {
      color: ${NEWCOLORS.GRAY300};
    }

    &:focus {
      outline: none;
      border-color: ${NEWCOLORS.BLUE200};
    }

    &:disabled {
      background-color: ${NEWCOLORS.GRAY200};
      color: ${NEWCOLORS.GRAY300};
      cursor: not-allowed;
    }
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  error: css`
    border-color: ${NEWCOLORS.RED300};

    &:focus {
      border-color: ${NEWCOLORS.RED300};
    }
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  errorMessage: css`
    color: ${NEWCOLORS.RED300};
    ${TEXTS.TITLE1}
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  success: css`
    border-color: ${NEWCOLORS.BLUE300};

    &:focus {
      border-color: ${NEWCOLORS.BLUE300};
    }
  `,

  // NOTE 공통 스타일로 빼도 될듯?
  successMessage: css`
    color: ${NEWCOLORS.BLUE300};
    ${TEXTS.TITLE1}
  `,
};
