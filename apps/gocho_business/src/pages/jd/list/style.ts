import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

export const cssObj = {
  contentContainer: css`
    background-color: ${NEWCOLORS.WHITE};
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
    position: relative;
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
    left: 1.375rem;
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

  orderButtonContainer: css`
    position: relative;
  `,

  orderToggleButton: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${NEWCOLORS.GRAY50};
    border-radius: 5px;
    width: 6.625rem;
    height: 2.5rem;
    padding: 0 1rem;
    font-size: 1rem;
    background-color: ${NEWCOLORS.WHITE};
    font-weight: 400;

    ::placeholder {
      color: ${NEWCOLORS.GRAY300};
    }
  `,

  orderList: (isOpen: boolean) => css`
    position: absolute;
    top: 2.75rem;
    left: 0;
    width: 100%;
    max-height: ${isOpen ? "20rem" : 0};
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 20;
    border: ${isOpen ? `1px solid ${NEWCOLORS.GRAY300}` : 0};

    ::-webkit-scrollbar {
      width: 0.5rem;
      background-color: ${NEWCOLORS.GRAY50};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: ${NEWCOLORS.GRAY300};
    }
  `,
};
