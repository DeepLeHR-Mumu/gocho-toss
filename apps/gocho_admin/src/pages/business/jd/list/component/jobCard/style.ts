import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const cssObj = {
  jobContainer: css`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > th {
      font-size: 1.25rem;
    }
  `,

  jobIdBox: css`
    width: 10%;
    text-align: center;
  `,

  mainInfoBox: css`
    width: 30%;
    text-align: center;
    ${shorten()};
  `,

  companyName: css`
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
  `,

  jobTitle: css`
    font-weight: 500;
    ${shorten()};
  `,

  taskBox: css`
    width: 20%;
    display: flex;
    justify-content: center;
    ${shorten()};
  `,

  dateBox: css`
    width: 10%;
    text-align: center;
  `,

  buttonContainer: css`
    width: 20%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;
  `,

  activeButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    width: 48%;
    height: 2rem;
    border: 2px solid ${COLORS.GRAY10};
    padding: 0.125rem 0.25rem;
    background-color: ${COLORS.BLUE_NEON40};
    color: ${COLORS.GRAY100};
  `,
};
