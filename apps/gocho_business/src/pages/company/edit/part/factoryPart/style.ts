import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  addFactoryButton: css`
    display: flex;
    border-radius: 0.75rem;
    height: 3.25rem;
    padding: 1rem;
    margin-bottom: 1.25rem;
    background-color: ${COLOR.BLUE50};
    ${TEXT.TITLE5_M1620};

    > svg {
      margin-right: 0.25rem;
    }
  `,

  factoryList: css`
    border-top: 1px solid ${COLOR.GRAY200};
  `,

  factoryBox: css`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.75rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};
    height: 3.25rem;
    padding: 0 1rem;
    margin-top: 1.25rem;

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${COLOR.GRAY450};
    }
  `,

  factoryInfoWrapper: css`
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  `,

  factoryAddress: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY500};
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
      color: ${COLOR.GRAY450};
    }
  `,

  deleteButton: css`
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    color: ${COLOR.BLACK};
    background-color: ${COLOR.GRAY300};
    z-index: 20;
  `,
};
