import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  partContainer: css`
    margin-top: 2.5rem;
  `,

  titleWrapper: css`
    padding: 1rem 2rem;
    background-color: #e9f6ff;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
  `,

  title: css`
    font-size: 1.25rem;
  `,

  dataWrapper: css`
    padding: 2rem;
    box-shadow: 0 0 8px rgba(85, 85, 85, 0.25);
    border-radius: 5px;
  `,

  container: css`
    margin-bottom: 1rem;
  `,

  containerWithGuide: css`
    margin-bottom: 2.5rem;
  `,

  inputTitle: (isError: boolean) => css`
    color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
    margin-bottom: 0.25rem;
  `,

  labelTitle: (isError: boolean) => css`
    color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
  `,

  input: (width: number) => css`
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 5px;
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    width: ${width}rem;
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  errorMessage: css`
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  arrayErrorMessage: css`
    position: absolute;
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  dateInputContainer: css`
    display: flex;
    align-items: flex-end;
    gap: 0 3rem;
    margin-bottom: 1rem;
  `,

  isAlwaysBlock: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    background-color: ${COLORS.GRAY70};
    color: ${COLORS.GRAY30};
    border-bottom: 1px solid ${COLORS.GRAY10};
  `,

  dateLabelContainer: css`
    display: flex;
    height: 2.5rem;
    gap: 0 3rem;
    margin-bottom: 0.75rem;
  `,

  label: css`
    cursor: pointer;
    display: flex;
    align-items: center;
  `,

  inputContainer: css`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem 0.5rem;
  `,

  inputContainerWithGuide: css`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 3.25rem 0.5rem;
  `,

  processBox: css`
    display: flex;
    align-items: flex-start;
    gap: 0 0.5rem;
  `,

  guideChipContainer: css`
    position: absolute;
    display: flex;
    overflow-y: visible;
    word-break: keep-all;
    margin-top: 0.375rem;
    gap: 0.5rem;
  `,

  inputLabel: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
  `,

  erasableInput: (width: number) => css`
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 5px;
    background-color: ${COLORS.GRAY100};
    width: ${width}rem;
    padding: 0.5rem 2.5rem 0.5rem 1rem;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  deleteInputButton: css`
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY70};
  `,

  icon: css`
    margin-top: 0.5rem;
    font-size: 1.5rem;
    color: ${COLORS.GRAY35};
  `,

  addButtonWrapper: css`
    margin-left: 0.5rem;
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
        background-color: ${COLORS.GRAY10};
        border-radius: 50%;
        content: "";
      }
    }
  `,

  radioBox: css`
    border: 2px solid ${COLORS.GRAY10};
    width: 1.125rem;
    height: 1.125rem;
    position: relative;
    background-color: ${COLORS.GRAY100};
    border-radius: 50%;
    margin-right: 0.25rem;
  `,

  applyUrlInputContainer: css`
    display: flex;
    gap: 0 1rem;
    align-items: center;
  `,

  inputLogo: css`
    position: absolute;
    top: 0.525rem;
    left: 1rem;
  `,

  applyUrlInput: (width: number) => css`
    font-size: 1rem;
    border: 1px solid ${COLORS.GRAY10};
    border-radius: 5px;
    width: ${width}rem;
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    font-weight: 400;
    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  linkButtonContainer: css`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    margin-top: 1rem;
  `,

  outerLinkButton: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    background-color: ${COLORS.GRAY80};
    color: ${COLORS.GRAY30};
    border-radius: 0.25rem;
    width: fit-content;
    padding: 0 1rem;
    height: 2.5rem;
  `,
};
