import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { TEXTS } from "shared-style/text";

import { commonCssObj } from "@/styles";

export const cssObj = {
  partContainer: css`
    ${commonCssObj.partContainer}
    margin-top: 3rem;
  `,

  partTitle: css`
    ${commonCssObj.partTitle}
    display:flex;
    flex-direction: row;

    & > div > svg {
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  tooltipWrapper: css`
    display: flex;
    align-items: center;
    position: relative;
  `,

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

  editButton: css`
    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  deleteButton: css`
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${NEWCOLORS.BLACK};
    background-color: ${NEWCOLORS.BLUEGRAY100};
    z-index: 20;
  `,
};
