import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  spinner: css`
    position: relative;
    width: 100%;
    height: 30rem;
  `,
  noDataWrapper: css`
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.GRAY60};
    border-radius: 1.5rem;
  `,
  noDataMessage: css`
    font-weight: 700;
    color: ${COLORS.GRAY10};
  `,
  wrapper: css`
    margin-bottom: 4.5rem;
    width: 30rem;
    background-color: ${COLORS.GRAY100};
    word-break: break-all;
    border: 1px solid ${COLORS.GRAY80};
    border-radius: 1.5rem;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
  `,
  editingBox: css`
    margin: -1.5rem;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(82, 124, 205, 0.4);
    backdrop-filter: blur(2px);
  `,

  editingText: css`
    color: #1553cd;
    font-size: 1.5rem;
    font-weight: 700;
  `,

  rejectedBox: css`
    background-color: #ffefef;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
  `,
  rejectedTitle: css`
    color: #ff6b6c;
    font-weight: 700;
    margin-bottom: 8px;
  `,
  rejectedMessage: css`
    color: #ff6b6c;
    font-size: 14px;
    white-space: pre-line;
    text-align: center;
  `,

  topContainer: css`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #cccccc;
  `,
  container: css`
    width: 100%;
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
    margin-bottom: 0.625rem;

    gap: 0 0.5rem;
    > svg {
      flex-shrink: 0;
      font-size: 1.5rem;
    }
  `,
  name: css`
    word-break: break-all;
    font-weight: 700;
    color: ${COLORS.GRAY10};
  `,

  address: css`
    color: ${COLORS.GRAY10};
    word-break: break-all;
  `,

  productContainer: css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-shrink: 0;
    gap: 0 0.5rem;
  `,

  productTitle: css`
    font-weight: 700;
    color: ${COLORS.GRAY10};
    line-height: 150%;
  `,

  product: css`
    word-break: break-all;
    color: ${COLORS.GRAY10};
    line-height: 150%;
  `,

  infoName: css`
    font-weight: 700;
    color: ${COLORS.GRAY10};
  `,

  buttonContainer: css`
    width: 25%;
    display: flex;
    justify-content: center;
    gap: 1rem 0;
    flex-direction: column;
    flex-shrink: 0;
  `,

  middleContainer: css`
    display: flex;
    margin-bottom: 1rem;
    gap: 2rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid #cccccc;
  `,
  infoItem: css`
    width: 47%;
    margin-right: 0.5rem;
  `,
  percentageContainer: css`
    display: flex;
    align-items: center;
    > div {
      :first-of-type {
        margin-right: 1rem;
      }
    }
  `,
  percentageBox: css`
    display: flex;
    align-items: center;
  `,
  iconBox: css`
    font-size: 1.5rem;
  `,

  percentage: css`
    color: ${COLORS.GRAY10};
  `,

  etcInfo: css`
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
    margin-right: 0.25rem;
  `,
  date: css`
    color: ${COLORS.GRAY40};
  `,
  top: css`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: block;
  `,
};
