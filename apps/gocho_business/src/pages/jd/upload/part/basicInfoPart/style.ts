import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  partContainer: css`
    margin: 3rem 2rem 0;
  `,

  title: css`
    font-size: 1.25rem;
  `,

  container: css`
    margin-bottom: 1rem;
    > p {
      line-height: 2;
    }
  `,

  containerWithGuide: css`
    margin-bottom: 2rem;
    > p {
      line-height: 2;
    }
  `,

  inputTitle: (isError: boolean) => css`
    color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
  `,

  input: (width: number) => css`
    border: 1px solid ${COLORS.GRAY10};
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
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  dateInputContainer: css`
    display: flex;
    align-items: flex-end;
    gap: 0 3rem;
    margin-top: 1rem;
  `,

  isAlwaysBlock: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 2.5rem;
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
    margin-top: 0.5rem;
    gap: 0.5rem;
  `,

  inputLabel: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${width}rem;
    border: 1px solid ${COLORS.GRAY10};
    height: 2.5rem;
    padding: 0 0.5rem 0 1rem;
  `,

  erasableInput: css`
    font-size: 1rem;
    width: calc(100% - 3rem);
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  deleteInputButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
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

  applyUrlInput: css`
    font-size: 1rem;
    width: calc(100% - 1.5rem);
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
