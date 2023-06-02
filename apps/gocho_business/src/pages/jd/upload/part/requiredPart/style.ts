import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  labelContainer: css`
    display: flex;
    gap: 0 2.5rem;
  `,

  label: css`
    display: flex;
    cursor: pointer;
    align-items: center;
  `,

  input: css`
    margin: 0;
  `,

  textareaWrapper: css`
    flex-grow: 1;
  `,

  errorMessage: css`
    margin-top: 0.25rem;
    height: 0.75rem;
    font-size: 0.75rem;
    color: ${COLORS.ERROR_RED40};
  `,

  optionContainer: css`
    position: relative;
    width: 20rem;
    height: 2.5rem;
    cursor: pointer;
  `,

  optionList: (isOpen: boolean) => css`
    position: absolute;
    top: 2.75rem;
    left: 0;
    width: 100%;
    max-height: ${isOpen ? "20rem" : 0};
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 20;
    border: ${isOpen ? `1px solid ${COLORS.GRAY30}` : 0};

    ::-webkit-scrollbar {
      width: 0.5rem;
      background-color: ${COLORS.GRAY90};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${COLORS.GRAY60};
    }
  `,

  option: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 20rem;
    height: 2.5rem;
    padding: 0 1rem;
    background-color: ${COLORS.GRAY100};
    color: ${COLORS.GRAY30};
    transition: 0.1s;

    :hover {
      background-color: ${COLORS.GRAY80};
    }
  `,

  selectedCertiContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  `,

  certiLabel: css`
    display: flex;
    align-items: center;
    gap: 0 0.25rem;
    border-radius: 1rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: 2.25rem;
    padding: 0 0.5rem;
  `,

  smallDeleteButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY70};
  `,
};
