import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cssObj = {
  companyContainer: css`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > th {
      font-size: 1.25rem;
    }
  `,

  companyIdBox: css`
    width: 20%;
    text-align: center;
  `,

  companyNameBox: css`
    width: 40%;
    text-align: center;
    ${shorten()};
  `,

  activeButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    width: 20%;
    height: 2rem;
    border: 2px solid ${COLOR.GRAY900};
    padding: 0.125rem 0.25rem;
    background-color: ${COLOR.BLUE300};
    color: ${COLOR.WHITE};
  `,
};
