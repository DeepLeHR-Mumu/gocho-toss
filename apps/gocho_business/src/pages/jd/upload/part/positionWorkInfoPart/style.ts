import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  container: css`
    margin-top: 2rem;
    p {
      line-height: 2;
    }
  `,

  rotationContainer: css`
    position: relative;
    width: 20rem;
    height: 2.5rem;
    cursor: pointer;
  `,

  rotationList: (isOpen: boolean) => css`
    position: absolute;
    top: 2.75rem;
    left: 0;
    width: 100%;
    max-height: ${isOpen ? "500px" : 0};
    border: ${isOpen ? `1px solid ${COLORS.GRAY30}` : 0};
    overflow: hidden;
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

  labelContainer: css`
    display: flex;
    gap: 0 2rem;
  `,

  label: css`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 2.5rem;
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
    gap: 0 0.5rem;
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

  deleteCertiButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY70};
  `,
};
