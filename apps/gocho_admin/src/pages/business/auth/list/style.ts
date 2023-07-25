import { css } from "@emotion/react";
// import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 0 2rem;
  `,

  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,

  listChangeButton: css`
    font-size: 1.125rem;
    padding: 0.25rem 1rem;
    border: 2px solid ${COLORS.GRAY10};
    background-color: ${COLORS.GRAY30};
    color: ${COLORS.GRAY100};
    margin-bottom: 2rem;
  `,

  customButton: css`
    border: 1px solid ${COLORS.BLUE_FIRST30};
    background-color: ${COLORS.BLUE_FIRST50};
    color: white;
    border-radius: 6px;
    width: 6rem;
    height: 3rem;
  `,

  tableContainer: css`
    width: 100%;

    td {
      padding: 0.5rem;
      text-align: center;
    }
  `,

  factoryContainer: css`
    height: 3rem;
    width: 100%;

    > th {
      font-size: 1.25rem;
    }
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  `,

  modalContainer: css`
    width: 30rem;
    height: 20rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;

    h3 {
      padding: 1rem;
      font-size: 1.3rem;
    }

    textarea {
      width: 20rem;
      height: 10rem;
      margin-bottom: 1rem;
    }
  `,
};
