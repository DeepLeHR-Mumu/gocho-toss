import { css } from "@emotion/react";
import { COLORS, NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  hiddenInput: css`
    display: none;
  `,

  rotationInnerText: css`
    white-space: nowrap;
    overflow: hidden;
  `,

  placeInputContainer: css`
    margin: 0.5rem 0 2rem;
    padding: 1.5rem;
    background-color: ${NEWCOLORS.WHITE};
  `,

  uploadFactoryButton: css`
    display: flex;
    gap: 0 0.5rem;
    border: 1px solid ${NEWCOLORS.BLUE50};
    border-radius: 0.5rem;
    height: 3.25rem;
    padding: 1rem;
    background-color: ${NEWCOLORS.BLUE100};
    ${TEXTS.TITLE5};

    > svg {
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  placeContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.75rem 0;
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
    position: relative;
    display: flex;
    align-items: center;
    gap: 0 1rem;
    border-radius: 2rem;
    background-color: ${COLORS.GRAY90};
    height: 2.5rem;
    padding: 0 2.5rem 0 1rem;
  `,

  inputLabel: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.5rem;
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
