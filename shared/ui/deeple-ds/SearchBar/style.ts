import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    border-radius: 1rem;
    background-color: ${COLOR.WHITE};
    padding: 0.625rem 1.25rem;
    align-items: center;
    border: 1px solid ${COLOR.WHITE};

    :focus-within {
      border: 1px solid ${COLOR.BLUE200};
    }

    input::-ms-clear,
    input::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration {
      display: none;
    }
  `,

  searchIcon: css`
    width: 1.5rem;
    height: 1.5rem;
    color: ${COLOR.BLUE300};
  `,

  input: css`
    flex: 1;
    ${TEXT.TITLE5_M1620}

    ::placeholder {
      color: ${COLOR.GRAY450};
    }

    :focus {
      outline: none;
    }

    :disabled {
      background-color: ${COLOR.GRAY200};
      color: ${COLOR.GRAY450};
      cursor: not-allowed;
    }
  `,

  grayLine: css`
    border: 1px solid ${COLOR.GRAY200};
  `,

  gray: css`
    background-color: ${COLOR.GRAY50};
  `,
};
