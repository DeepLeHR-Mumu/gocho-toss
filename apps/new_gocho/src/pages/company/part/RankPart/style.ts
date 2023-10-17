import { css } from "@emotion/react";

export const cssObj = {
  sectionContainer: css`
    margin: 4.5rem 0;
  `,

  headerContainer: css`
    display: flex;
    gap: 1rem;
  `,

  left: css`
    position: absolute;
    width: 1.25rem;
    top: 0.5rem;
    height: 1.25rem;
    z-index: 3;
  `,

  today: css`
    position: absolute;
    left: 0.88rem;
    width: 5rem;
    height: 2.3rem;
  `,

  iconWrap: css`
    position: relative;
    display: flex;
  `,

  companyList: css`
    margin-top: 3rem;
  `,
};
