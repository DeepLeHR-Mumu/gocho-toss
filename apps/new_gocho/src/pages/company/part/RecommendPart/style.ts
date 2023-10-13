import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { TEXT } from "shared-style/text";

export const cssObj = {
  sectionContainer: css`
    width: 100%;
    padding: 4.5rem 0;
  `,

  headerContainer: css`
    padding-bottom: 3rem;
  `,

  desc: css`
    ${TEXT.TITLE5_M1620};
    margin-top: 1rem;
    color: ${COLOR.GRAY600};
  `,

  companyList: css`
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
  `,
};
