import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    margin-bottom: 4.5rem;
    width: 30rem;
    word-break: break-all;
    border: 1px solid #e9e9e9;
    border-radius: 1.5rem;
    padding: 1.5rem;
  `,
  topContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  container: css`
    width: 75%;
    margin-right: 1rem;
  `,
  nameContainer: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
  `,
  addressContainer: css`
    display: flex;
    align-items: flex-start;
    /* align-items: center; */

    gap: 0 0.5rem;
    > svg {
      margin-top: 0.3rem;
      flex-shrink: 0;
    }
  `,
  name: css`
    word-break: break-all;
    font-weight: 700;
  `,
  address: css`
    font-weight: 400;
    word-break: break-all;
  `,
  productContainer: css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-shrink: 0;
    gap: 0 0.5rem;
  `,
  infoName: css`
    font-weight: 700;
  `,
  product: css`
    word-break: break-all;
  `,
  buttonContainer: css`
    width: 25%;
    display: flex;
    justify-content: space-between;
    gap: 1rem 0;
    flex-direction: column;
    flex-shrink: 0;
  `,
  middleContainer: css`
    display: flex;
    margin: 2rem 0;
    gap: 2rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
  `,

  infoItem: css`
    width: 47%;
  `,
  percentageBox: css`
    display: flex;
  `,
  etcInfo: css`
    font-weight: 400;
    margin-top: 0.75rem;
    color: ${COLORS.GRAY30};
    word-break: break-all;
  `,
  uploadInfoContainer: css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  dateContainer: css`
    display: flex;
    flex-direction: row;
  `,

  dateName: css`
    color: ${COLORS.GRAY60};
    font-weight: 400;
  `,
  date: css`
    font-weight: 400;
  `,
};
