import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    margin-top: 2rem;
    p {
      line-height: 2;
    }
  `,

  optionContainer: css`
    position: relative;
    width: 20rem;
    height: 2.5rem;
    cursor: pointer;
  `,

  input: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${COLORS.GRAY10};
    width: ${width}rem;
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    background-color: ${COLORS.GRAY100};
    font-weight: 400;

    ::placeholder {
      color: ${COLORS.GRAY30};
    }
  `,

  rotationInnerText: css`
    white-space: nowrap;
    overflow: hidden;
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

  labelContainer: css`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    gap: 0 0.5rem;
  `,

  placeTypeLabelData: (isSelected: boolean) => css`
    display: flex;
    background-color: ${isSelected ? `${COLORS.GRAY100}` : `${COLORS.GRAY80}`};
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
    margin-left: -2rem;
    margin-right: 0.75rem;
    align-items: center;
    gap: 0 0.25rem;
  `,

  placeTypeLabelIcon: css`
    margin-top: 0.25rem;
    font-size: 1.25rem;
  `,

  desc: css`
    color: ${COLORS.GRAY35};
    margin-left: 2rem;
  `,

  placeInputContainer: css`
    margin-top: 0.5rem;
    padding: 1.5rem;
    background-color: ${COLORS.GRAY100};
  `,

  factoryInputWrapper: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,

  uploadFactoryDesc: css`
    margin-left: 1rem;
  `,

  uploadFactoryButton: css`
    color: ${COLORS.BLUE_FIRST40};
    margin-left: 0.5rem;
  `,

  placeContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  `,

  factoryBox: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    border-radius: 2rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: 2.25rem;
    padding: 0 0.5rem 0 1rem;
  `,

  addressBox: css`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    border-radius: 2rem;
    background-color: ${COLORS.GRAY90};
    height: 2.5rem;
    padding: 0 0.5rem 0 1rem;
  `,

  inputTitle: (isError: boolean) => css`
    color: ${isError ? COLORS.ERROR_RED40 : COLORS.GRAY10};
  `,

  inputContainer: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 2rem;
  `,

  inputLabel: (width: number) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${width}rem;
    height: 2.5rem;
    border: 1px solid ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY100};
    padding: 0 0.5rem 0 1rem;
  `,

  inputWithButton: css`
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
