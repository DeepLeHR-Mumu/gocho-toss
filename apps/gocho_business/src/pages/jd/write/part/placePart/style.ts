import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  titleWrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  title: css`
    ${TEXT.TITLE1_B2832}
  `,

  radioWrapper: css`
    display: flex;
    align-items: center;

    > div {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-right: 2.5rem;

      > input {
        margin: 0;
      }
    }
  `,

  errorMessage: css`
    color: ${COLOR.RED200};
    ${TEXT.BODY3_R1422}
  `,

  checkboxWrapper: (disabled: boolean) => css`
    display: flex;
    align-items: center;
    gap: 0.6875rem;
    color: ${disabled ? COLOR.GRAY450 : COLOR.BLACK};
  `,

  contentsWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 2.125rem;
  `,

  buttonGroup: css`
    display: flex;
    align-items: center;
    gap: 1.25rem;
  `,

  addAddressButton: css`
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.GRAY50};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;

    > svg {
      width: 1rem;
      height: 1rem;
      color: ${COLOR.GRAY450};
      margin-right: 0.5rem;
    }
  `,

  addFactoryButton: css`
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid ${COLOR.BLUE100};
    background-color: ${COLOR.BLUE50};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;

    > svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
  `,

  addPlaceContainer: css`
    margin-top: 0.5rem;
    border-radius: 0.75rem;
    border: 1px solid ${COLOR.GRAY200};
    overflow: hidden;
  `,

  searchPlaceWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.25rem 1rem;
  `,

  searchPlaceButton: css`
    width: 7.5rem;
    height: 3.25rem;
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 0.5rem;
    margin-left: 1.25rem;
  `,

  factoryListWrapper: css`
    max-height: 25.25rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  addPlaceButtonGroup: css`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  `,

  placeListWrapper: css`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  place: (checked: boolean) => css`
    border-radius: 0.75rem;
    border: 1px solid ${checked ? COLOR.BLUE300 : COLOR.GRAY200};
    padding: 0.875rem 1rem;
    display: flex;
    align-items: center;

    > input:first-of-type {
      margin-right: 0.5rem;
    }

    > h2 {
      margin-right: 0.5rem;
      ${TEXT.TITLE6_M1418}
    }

    > span {
      color: ${COLOR.GRAY600};
      ${TEXT.BODY3_R1422}
    }
  `,

  placeholder: css`
    color: ${COLOR.GRAY450};
    ${TEXT.BODY2_R1624}
  `,

  specific: css`
    ${TEXT.BODY2_R1624}
  `,

  editButton: css`
    margin-left: auto;
    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: ${COLOR.GRAY450};
    }
  `,

  minusButton: css`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.5rem;
    background-color: ${COLOR.GRAY100};
    color: ${COLOR.GRAY600};
    margin-left: auto;
  `,
};
