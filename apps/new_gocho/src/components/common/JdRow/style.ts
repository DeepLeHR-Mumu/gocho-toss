import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  wrapper: (half?: boolean) => css`
    border: 1px solid ${COLOR.GRAY200};
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    padding: 1.25rem ${half ? "1.5rem" : "2.5rem"} 1.375rem 1.5rem;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLOR.WHITE};
  `,

  skeletonWrapper: css`
    width: 100%;
    height: 7.25rem;
    border-radius: 1rem;
    overflow: hidden;
  `,

  descriptionWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  jdCompanyName: css`
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE6_M1418}
  `,

  jdTitleWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  `,

  jdTitle: css`
    ${TEXT.TITLE4_B1822}
  `,

  jdDueDateWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  `,

  jdDueDate: css`
    display: flex;
    align-items: center;
    height: 1.875rem;
    color: ${COLOR.GRAY600};
    ${TEXT.TITLE6_M1418}
  `,

  expired: css`
    color: ${COLOR.GRAY500} !important;
    border-color: ${COLOR.GRAY200};
    background-color: ${COLOR.GRAY100};
  `,
};
