import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLOR } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 2rem 0;
    padding: 1rem;
    background-color: ${COLOR.BLUE50};
  `,

  titleBox: css`
    height: 2rem;
    font-size: 1.25rem;
    padding: 0.5rem;
  `,

  bannerId: css`
    width: 5%;
    text-align: center;
  `,

  expireDate: css`
    width: 5%;
    text-align: center;
    ${shorten()};
  `,

  pcImagePreview: css`
    width: 40%;
  `,

  mobileImagePreview: css`
    width: 40%;
  `,
};
