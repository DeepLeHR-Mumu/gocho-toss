import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { MOBILE } from "shared-style/mediaQuery";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    border-radius: 1rem;
    background-color: ${NEWCOLORS.WHITE};
    padding: 0.625rem 1.25rem;
    align-items: center;
    border: 1px solid ${NEWCOLORS.WHITE};

    :focus-within {
      border: 1px solid ${NEWCOLORS.BLUE200};
    }
  `,

  searchIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${NEWCOLORS.BLUE300};

    ${MOBILE} {
      width: 1.25rem;
      height: 1.25rem;
    }
  `,

  input: css`
    flex: 1;
    ${NEWTEXTS.TITLE7}

    ::placeholder {
      color: ${NEWCOLORS.GRAY300};
    }

    :focus {
      outline: none;
    }

    :disabled {
      background-color: ${NEWCOLORS.GRAY200};
      color: ${NEWCOLORS.GRAY300};
      cursor: not-allowed;
    }

    ${MOBILE} {
      ${NEWTEXTS.TITLE4}
    }
  `,

  grayLine: css`
    border: 1px solid ${NEWCOLORS.GRAY200};
  `,
};
