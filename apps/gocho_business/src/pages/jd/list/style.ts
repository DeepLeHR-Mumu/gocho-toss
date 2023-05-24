import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  contentContainer: css`
    background-color: ${COLORS.GRAY100};
    padding: 2rem;
    border: 1px solid #e2e4e6;
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #0000000d;
  `,
  spinner: css`
    position: relative;
    width: 100%;
    margin-top: 2rem;
    height: 9rem;
    background-color: #f6f7fa;
  `,

  noDataSectionContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
  `,

  noDataDesc: css`
    font-weight: 700;
  `,

  title: css`
    font-size: 1.25rem;
  `,

  buttonWrapper: css`
    width: 400px;
    margin: 4.5rem auto;
  `,
};
