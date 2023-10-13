import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXTS } from "shared-style/text";

export const cssObj = {
  titleWrapper: css`
    display: flex;
    align-items: center;
    height: 2.25rem;
  `,

  placeWrapper: css`
    flex-grow: 1;
  `,

  placeInputWrapper: css`
    margin-top: 1.5rem;
  `,

  hiddenInput: css`
    display: none;
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
    margin-bottom: 1.25rem;

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
    ${TEXTS.TITLE3};
    color: ${COLOR.GRAY500};
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
  `,

  addPlaceButtonContainer: css`
    display: flex;
    gap: 0 1.25rem;
  `,

  uploadFactoryButton: css`
    display: flex;
    gap: 0 0.5rem;
    border: 1px solid ${COLOR.BLUE50};
    border-radius: 0.5rem;
    height: 3.25rem;
    padding: 1rem;
    background-color: ${COLOR.BLUE100};
    ${TEXTS.TITLE5};

    > svg {
      color: ${COLOR.GRAY450};
    }
  `,

  addressBox: css`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0 1rem;
    border-radius: 2rem;
    background-color: ${COLOR.GRAY50};
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
};
