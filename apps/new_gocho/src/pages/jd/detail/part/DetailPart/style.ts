import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    width: 48.5rem;
  `,

  skeletonWrapper: css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 60rem;
    overflow: hidden;
    border-radius: 1rem;
  `,

  container: css`
    border-radius: 1rem;
    border: 1px solid ${COLOR.GRAY200};
    background-color: ${COLOR.WHITE};
    padding: 2rem 1.5rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.05);

    :last-of-type {
      margin-bottom: 0;
    }
  `,

  placeWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  `,

  factoryWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  `,

  factoryName: css`
    color: ${COLOR.BLACK};
    ${TEXT.TITLE4_B1822}
  `,

  rightIcon: css`
    width: 1.25rem;
    height: 1.25rem;
    color: ${COLOR.GRAY450};
    margin-left: 0.5rem;
  `,

  factoryAddress: css`
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE4_M1822}
  `,
};
