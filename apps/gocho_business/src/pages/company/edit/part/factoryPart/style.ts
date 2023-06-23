import { css } from "@emotion/react";
import { COLORS, NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  addFactoryButton: css`
    display: flex;
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem;
    margin-bottom: 1.25rem;
    background-color: ${NEWCOLORS.BLUE50};
    ${TEXTS.TITLE5};

    > svg {
      margin-right: 0.25rem;
    }
  `,

  factoryList: css`
    border-top: 1px solid ${NEWCOLORS.GRAY200};
  `,

  factoryBox: css`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.75rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    height: 3.25rem;
    padding: 0 1rem;
    margin-top: 1.25rem;

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  factoryInfoWrapper: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,

  factoryAddress: css`
    ${TEXTS.TITLE3};
    color: ${NEWCOLORS.BLUEGRAY300};
  `,

  buttonContainer: css`
    display: flex;
    align-items: center;
    gap: 0 1.5rem;
  `,

  editButton: css``,

  deleteButton: css`
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY70};
    z-index: 20;
  `,
};
