import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 0 2rem;
  `,

  listChangeButton: css`
    font-size: 1.125rem;
    padding: 0.25rem 1rem;
    border: 2px solid ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY30};
    color: ${COLORS.GRAY100};
  `,

  tableContainer: css`
    width: 100%;
  `,

  factoryContainer: css`
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > th {
      font-size: 1.25rem;
    }
  `,

  factoryIdBox: css`
    width: 20%;
    text-align: center;
  `,

  factoryNameBox: css`
    width: 40%;
    text-align: center;
    ${shorten()};
  `,

  buttonContainer: css`
    width: 20%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  `,
};
