import { css } from "@emotion/react";

import { TEXT } from "shared-style/text";
import { COLOR } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  topBar: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  buttonContainer: css`
    display: flex;
    gap: 0 0.5rem;
  `,

  infoTypeButton: (isActive: boolean) => css`
    ${TEXT.TITLE4_B1822};
    padding: 0.75rem 1.25rem;
    background-color: ${isActive ? `${COLOR.BLUE300}` : `${COLOR.WHITE}`};
    color: ${isActive ? `${COLOR.WHITE}` : `${COLOR.GRAY600}`};
    border-radius: 1.5rem;
  `,

  moreButton: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY600};
  `,

  infoList: css`
    min-height: 6.25rem;
  `,

  infoContainer: css`
    display: flex;
    align-items: center;
    margin-top: 1.25rem;
  `,

  infoType: css`
    ${TEXT.TITLE5_B1620};
    min-width: 5.25rem;
  `,

  infoTitle: css`
    flex-grow: 1;
    ${TEXT.TITLE5_M1620};
    ${shorten()};
  `,

  infoDate: css`
    ${TEXT.TITLE6_M1418};
    color: ${COLOR.GRAY500};
  `,
};
