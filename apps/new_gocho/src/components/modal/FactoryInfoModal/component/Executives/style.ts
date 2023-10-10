import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";
import { NEWTEXTS } from "shared-style/text";

export const cssObj = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  simpleChartWrapper: css`
    padding: 1rem 1.25rem 0.375rem;
    height: 7.5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 1rem;
    margin-bottom: 1.25rem;
  `,

  maleBar: (percent: number) => css`
    width: 2rem;
    height: ${percent}%;
    background-color: ${NEWCOLORS.BLUE250};
    border-radius: 0.5rem 0.5rem 0 0;
    position: relative;

    ::after {
      content: "${percent}%";
      width: 100%;
      position: absolute;
      top: -1.375rem;
      text-align: center;
      color: ${NEWCOLORS.BLUE250};
      ${NEWTEXTS.TITLE6_M1418}
    }
  `,

  femaleBar: (percent: number) => css`
    width: 2rem;
    height: ${percent}%;
    background-color: ${NEWCOLORS.RED100};
    border-radius: 0.5rem 0.5rem 0 0;
    position: relative;

    ::after {
      content: "${percent}%";
      width: 100%;
      position: absolute;
      top: -1.375rem;
      text-align: center;
      color: ${NEWCOLORS.RED100};
      ${NEWTEXTS.TITLE6_M1418}
    }
  `,

  contentTitle: css`
    color: ${NEWCOLORS.BLUEGRAY400};
    margin-bottom: 0.5rem;
    ${NEWTEXTS.TITLE4_M1822}
  `,

  content: css`
    ${NEWTEXTS.TITLE4_M1822}
  `,
};
