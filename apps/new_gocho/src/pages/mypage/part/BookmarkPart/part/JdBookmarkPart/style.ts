import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
  `,

  checkWrapper: css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    p {
      color: ${COLOR.GRAY600};
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.125rem;
    }
  `,

  listWrapper: css`
    display: flex;
    gap: 1rem;
    flex-direction: column;
  `,

  dropdownWrapper: css`
    display: flex;
    flex-direction: row-reverse;
  `,

  filterBox: css`
    display: flex;
    padding-top: 0.25rem;
    justify-content: space-between;
    gap: 0.5rem;
  `,

  filterText: css`
    font-weight: 400;
    line-height: 1.25rem;
  `,

  filterIcon: css`
    width: 1.25rem;
    height: 1.25rem;
  `,
};
