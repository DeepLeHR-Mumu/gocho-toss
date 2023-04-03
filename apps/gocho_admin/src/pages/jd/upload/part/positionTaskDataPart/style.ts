import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

const defaultConversionCSS = css`
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

    > li {
      margin-bottom: 2rem;
    }
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
  subTitle: css`
    font-size: 1rem;
    font-weight: 500;
    color: ${COLORS.GRAY10};
    display: block;
    margin: 2rem 0 1rem;
  `,
  warningDesc: css`
    display: block;
    color: ${COLORS.BLUE_FIRST40};
    font-size: 0.875rem;
    font-weight: 400;
    padding: 0.5rem 0;
  `,
  flexBox: css`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
    gap: 0.5rem;
  `,
  deleteButton: css`
    background-color: ${COLORS.BLUE_FIRST40};
    padding: 0.25rem 1rem;
    width: fit-content;
    border-radius: 0.3125rem;
    font-size: 0.875rem;
    color: ${COLORS.GRAY100};
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.GRAY100};
    transition: all 200ms ease-in;

    :hover {
      background-color: ${COLORS.ERROR_RED30};
    }

    > svg {
      margin-left: 0.25rem;
    }
  `,
  isHaveFactoryButton: css`
    font-size: 0.875rem;
    color: ${COLORS.BLUE_FIRST40};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      margin-right: 0.25rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${COLORS.BLUE_FIRST40};
    }
  `,
  factoryButton: css`
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    padding: 0.5rem;
    > div {
      margin-right: 0.25rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${COLORS.GRAY100};
      border: 1px solid ${COLORS.GRAY10};
    }
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
  inputCSS: css`
    width: 100%;
    max-width: 40rem;
    border: 1px solid ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY100};
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.625rem;
    height: 2.5rem;
    color: ${COLORS.GRAY10};
    margin-right: 1rem;
  `,
  conversionLabel: css`
    display: flex;
    align-items: center;
  `,
  conversionInput: css`
    ${defaultConversionCSS};
  `,
  disabledConversionInput: css`
    ${defaultConversionCSS};
    background-color: ${COLORS.GRAY80};
    border: 0;
  `,
  conversionDesc: css`
    font-size: 0.875rem;
    padding: 0 1rem;
    color: ${COLORS.GRAY10};
  `,
  selectCSS: css`
    width: 100%;
    max-width: 40rem;
    border: 1px solid ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY100};
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.625rem;
    height: 2.5rem;
    color: ${COLORS.GRAY10};
    margin-right: 1rem;
  `,
  selectBox: css`
    display: grid;
    align-items: center;
    grid-template-columns: 30% 50% 10%;
    justify-content: space-between;
  `,
  disableAddButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    background-color: ${COLORS.GRAY80};
    color: ${COLORS.GRAY100};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  `,
  addButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    background-color: ${COLORS.BLUE_FIRST40};
    color: ${COLORS.GRAY100};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  `,
  placeBox: css`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin: 1rem 0;
  `,
  addAddressButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    border: 1px solid ${COLORS.GRAY70};
    margin-bottom: 1rem;
    font-size: 0.875rem;
    width: fit-content;
    color: ${COLORS.GRAY10};
    font-weight: 400;
    background-color: ${COLORS.GRAY100};
    padding: 0.25rem 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  `,
  placeButtonCSS: css`
    display: flex;
    width: 100%;
    padding: 0.25rem 0 0.25rem 1rem;
    justify-content: space-between;
    align-items: center;
    position: relative;

    :hover {
      text-decoration: underline;
    }

    ::before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      background-color: ${COLORS.GRAY10};
      border-radius: 50%;
    }

    > svg {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
  `,
};
