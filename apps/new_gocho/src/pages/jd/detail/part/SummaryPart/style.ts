import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  background: css`
    padding: 1.75rem 0;
    background: ${COLOR.BLUE250};
  `,

  wrapper: css`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    border-radius: 1rem;
    background-color: ${COLOR.WHITE};
  `,

  skeletonWrapper: css`
    width: 100%;
    height: 15.875rem;
    border-radius: 1rem;
    overflow: hidden;
  `,

  companyWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  companyName: css`
    margin-left: 1rem;
    margin-right: auto;
    ${NEWTEXTS.TITLE5_M1620}
  `,

  viewWrapper: css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${COLOR.GRAY450};
    ${NEWTEXTS.TITLE5_M1620}
  `,

  title: css`
    ${NEWTEXTS.DISPLAY2_B3236}
  `,

  dueDateWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    color: ${COLOR.GRAY600};
  `,

  chipsWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    > button {
      cursor: default;
    }
  `,
};
