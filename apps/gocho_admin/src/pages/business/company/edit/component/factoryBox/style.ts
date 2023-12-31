import { css } from "@emotion/react";
import { TEXT } from "shared-style/text";

export const cssObj = {
  factoryBox: css`
    width: 100%;
  `,

  dataContainer: css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  `,

  dataBox: css`
    width: 49%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  `,

  title: css`
    display: block;
    ${TEXT.TITLE4_B1822};
    margin-bottom: 0.5rem;
  `,

  dataTitle: css`
    ${TEXT.TITLE4_M1822};
  `,
};
