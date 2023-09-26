import { css } from "@emotion/react";

import { cssObj as subContainerCssObj } from "../DetailSubContainer/style";

export const cssObj = {
  subContainer: css`
    ${subContainerCssObj.subContainer}
  `,

  divider: css`
    margin: 0 1.5rem;
  `,

  contentWrapper: css`
    ${subContainerCssObj.contentWrapper}
    padding: 0 1.5rem 2rem;
  `,

  rowWrapper: css`
    ${subContainerCssObj.rowWrapper}
  `,
};
