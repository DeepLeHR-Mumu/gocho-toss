import { css } from "@emotion/react";
import { COLORS, NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
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
    gap: 0 3rem;
  `,

  label: css`
    cursor: pointer;
    display: flex;
    align-items: center;
  `,

  inputContainerWithGuide: css`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 59.625rem;
    gap: 0.5rem;
  `,

  processBox: css`
    display: flex;
    align-items: flex-start;
    gap: 0 0.5rem;
  `,

  inputLabel: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    gap: 0 2.5rem;
    margin-bottom: 1.75rem;
  `,

  radio: css`
    margin: 0;
    display: none;
    appearance: auto;
    :checked ~ div {
      border-color: ${COLORS.BLUE_FIRST40};

      :after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.75rem;
        height: 0.75rem;
        background-color: ${NEWCOLORS.BLUE300};
        border-radius: 50%;
        content: "";
      }
    }
  `,

  radioBox: css`
    border: 1.5px solid ${NEWCOLORS.GRAY300};
    width: 1.25rem;
    height: 1.25rem;
    position: relative;
    background-color: ${NEWCOLORS.WHITE};
    border-radius: 50%;
    margin-right: 0.25rem;
  `,

  linkButtonContainer: css`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    margin-top: 1rem;
  `,

  externalLinkButton: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ${NEWCOLORS.GRAY100};
    ${TEXTS.TITLE4};
    color: ${NEWCOLORS.BLUEGRAY400};

    > svg {
      color: ${NEWCOLORS.GRAY300};
    }
  `,
};
