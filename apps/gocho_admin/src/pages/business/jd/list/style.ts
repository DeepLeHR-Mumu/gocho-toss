import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
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

  tableContainer: css`
    width: 100%;
  `,

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

  taskContainer: css`
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
    flex-wrap: wrap;
    gap: 0.25rem;
  `,
};
