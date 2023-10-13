import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  formWrapper: css`
    height: 30.5rem;
  `,

  inputWrapper: css`
    position: relative;
    margin-bottom: 2rem;
  `,

  inputTitle: css`
    ${TEXT.TITLE5_B1620};
    color: ${COLOR.GRAY600};
    margin-bottom: 0.75rem;
  `,

  optionList: (isSearched: boolean) => css`
    position: absolute;
    top: 5.75rem;
    width: 25.5rem;
    display: ${isSearched ? "block" : "none"};
    background-color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);
    max-height: 11.5rem;
    overflow-y: scroll;
    z-index: 50;
  `,

  option: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 2.5rem;
    padding: 0.75rem 1.5rem;
    transition: 0.1s;
    ${TEXT.TITLE5_M1620};

    :hover {
      background-color: ${COLOR.GRAY100};
    }
  `,

  newCompanyButton: css`
    ${TEXT.TITLE5_M1620};

    display: block;
    cursor: pointer;
    width: 100%;
    text-align: left;
    padding: 0.75rem 1.5rem;

    :hover {
      background-color: ${COLOR.GRAY100};
    }
  `,

  desc: css`
    ${TEXT.TITLE6_M1418};
    margin-bottom: 0.75rem;
  `,

  buttonBox: css`
    display: flex;

    > svg {
      rotate: 45deg;
      font-weight: 700;
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.5rem;
    }
  `,

  point: css`
    color: ${COLOR.BLUE300};
    margin-left: 0.25rem;
  `,

  businessNumberInput: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    color: ${COLOR.GRAY450};
  `,
};
