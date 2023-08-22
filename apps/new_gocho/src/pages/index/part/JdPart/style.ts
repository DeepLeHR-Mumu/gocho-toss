import { css } from "@emotion/react";
import { NEWTEXTS } from "shared-style/text";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 4.5rem 0;
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  title: css`
    ${NEWTEXTS.TITLE15};
  `,

  buttonContainer: css`
    display: flex;
  `,

  colorPoint: css`
    color: ${NEWCOLORS.BLUE250};
  `,

  cardContainer: css``,
};
