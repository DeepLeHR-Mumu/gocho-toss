import { css } from "@emotion/react";

export const cssObj = {
  wrapper: css`
    width: 100%;
    height: 24.5rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,

  dropdownWrapper: css`
    display: flex;
    flex-direction: row-reverse;
  `,

  listWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
