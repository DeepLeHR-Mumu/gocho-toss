import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin-top: 4.5rem;
    margin-bottom: 9rem;
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  `,

  link: css`
    font-size: 1rem;
    padding-top: 0.625%;
    color: ${COLOR.GRAY600};
  `,

  companyList: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    > a {
      width: 100%;
    }
  `,
};
