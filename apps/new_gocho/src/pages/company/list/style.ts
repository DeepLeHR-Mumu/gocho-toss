import { css } from "@emotion/react";

export const cssObj = {
  titleContainer: css`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
  `,

  titleFilterBox: css`
    display: flex;
    padding-top: 0.25rem;
    justify-content: space-between;
    gap: 0.75rem;
  `,

  titleFilterIcon: css`
    width: 2rem;
    height: 2rem;
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

  companyList: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    > a {
      width: 100%;
    }
  `,

  paginationBox: css`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  `,
};
