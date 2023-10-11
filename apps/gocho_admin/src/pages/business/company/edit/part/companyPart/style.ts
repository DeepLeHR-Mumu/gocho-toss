import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  sectionContainer: css`
    margin: 0 auto;
  `,

  dataContainer: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
  `,

  dataTitle: css`
    font-size: 1.25rem;
    font-weight: 700;
    margin-right: 1rem;
    white-space: nowrap;
    word-break: keep-all;
    width: 6.5rem;
  `,

  dataBox: css`
    line-height: 1.5;
    word-break: break-all;
  `,

  imageContainer: css`
    width: 12rem;
    height: 5rem;
    position: relative;

    > img {
      object-fit: contain;
    }
  `,

  welfareContainer: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: ${COLOR.BLUE50};
    padding: 1rem;
    margin: 1rem 0;
  `,

  factoryContainer: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: ${COLOR.GRAY100};
    padding: 1rem;
    margin: 1rem 0;
  `,
};
