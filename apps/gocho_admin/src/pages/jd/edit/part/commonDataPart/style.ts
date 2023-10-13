import { css } from "@emotion/react";

import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css``,
  title: css`
    font-size: 1.25rem;
    font-weight: 500;
    color: ${COLOR.GRAY900};
    margin-bottom: 1rem;
    display: block;
  `,
  container: css`
    padding: 1rem;

    > li {
      margin-bottom: 1.5rem;
    }
  `,
  checkBoxLabel: (isFocus: boolean) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    box-sizing: border-box;
    padding: 0 3px;
    height: 1.875rem;
    width: fit-content;
    border: 0.13rem solid ${isFocus ? COLOR.BLUE300 : "transparent"};
    border-radius: 0.3125rem;
  `,
  checkBoxInput: css`
    width: 0;
    height: 0;
    margin: 0;

    :checked ~ div {
      background-color: ${COLOR.BLUE300};
      border: 0;
      > svg {
        color: ${COLOR.WHITE};
        display: block;
      }
    }
  `,
  checkBox: (isDisabled: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid ${COLOR.GRAY400};
    background-color: ${isDisabled ? COLOR.GRAY50 : COLOR.WHITE};
    border-radius: 5px;
    margin-right: 0.5rem;

    > svg {
      display: none;
    }
  `,
  dateInput: css`
    width: 100%;
    border-radius: 0.625rem;
    border: 1px solid ${COLOR.GRAY900};
    padding: 0 1rem;
    height: 2.5rem;
    background-color: ${COLOR.WHITE};
  `,
  checkboxDesc: css`
    font-size: 0.875rem;
    font-weight: 400;
    color: ${COLOR.GRAY900};
  `,
  infoBox: css``,
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
  flexFullBox: css`
    display: flex;
    align-items: center;
    padding: 1rem 0;
  `,
  dateBox: css`
    width: 100%;
    display: grid;
    grid-template-columns: 10% 10% 30% 30%;
    align-items: center;
    gap: 2rem;
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
  flexLiCSS: css`
    display: flex;
    flex-direction: column;
    > ul {
      width: 100%;
      > li {
        margin-bottom: 1.5rem;
      }
    }
  `,
  point: css`
    color: ${COLOR.BLUE300};
    font-weight: 500;
  `,
  inputCSS: css`
    width: 100%;
    max-width: 40rem;
    border: 1px solid ${COLOR.GRAY900};
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.625rem;
    height: 2.5rem;
    color: ${COLOR.GRAY900};
    margin-right: 1rem;
  `,
  buttonCSS: css`
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
    font-size: 1rem;
    width: fit-content;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border-radius: 0.625rem;
  `,
  companySelectBox: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: baseline;
    gap: 1rem;

    p {
      font-size: 1rem;
      color: ${COLOR.GRAY700};
      padding-left: 0.25rem;
      padding: 0.25rem;
    }
  `,
  linkLabelContainer: css`
    display: flex;
    gap: 0 1rem;
    margin-bottom: 0.25rem;
  `,

  radio: css`
    margin: 0;
    display: none;
    appearance: auto;
    :checked ~ div {
      :after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.625rem;
        height: 0.625rem;
        background-color: ${COLOR.GRAY900};
        border-radius: 50%;
        content: "";
      }
    }
  `,
  label: css`
    cursor: pointer;
    display: flex;
    align-items: center;
  `,
  radioBox: css`
    border: 2px solid ${COLOR.GRAY900};
    width: 1.125rem;
    height: 1.125rem;
    position: relative;
    background-color: ${COLOR.WHITE};
    border-radius: 50%;
    margin-right: 0.25rem;
  `,
  labelTitle: css`
    color: ${COLOR.GRAY900};
  `,
};
