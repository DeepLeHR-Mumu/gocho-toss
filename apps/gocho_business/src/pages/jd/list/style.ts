import { css } from "@emotion/react";
import { COLORS, NEWCOLORS } from "shared-style/color";

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
    font-size: 1.75rem;
  `,

  flexBox: css`
    display: flex;
    margin-top: 1rem;
  `,

  searchWrapper: css`
    position: relative;
  `,

  searchBox: css`
    width: 30rem;
    height: 2.75rem;
    padding: 0.5rem 1rem 0.5rem 3.25rem;
    border-radius: 1rem;
    border: 1px solid ${NEWCOLORS.GRAY200};
    background-color: ${NEWCOLORS.WHITE};
    color: ${NEWCOLORS.BLUEGRAY700};

    ::placeholder {
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  searchButton: css`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translate(0, -50%);
    color: ${NEWCOLORS.BLUE300};

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,

  buttonArrContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  buttonWrapper: css`
    width: 400px;
    margin: 4.5rem auto;
  `,
};
