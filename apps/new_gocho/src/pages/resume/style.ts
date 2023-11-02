import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const cssObj = {
  background: css`
    background-color: ${COLOR.GRAY100};
  `,

  contentsWrapper: css`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding-top: 2.5rem;
  `,

  mainContentsWrapper: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 55.5rem;
    gap: 2rem;
  `,

  rootViewPort: css`
    border: 1px solid black;
    overflow: visible;
  `,

  sideContentsWrapper: css`
    flex-basis: 10.5rem;
    flex-shrink: 0;
  `,

  previewButtonWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: sticky;
    top: 11.25rem;
  `,

  scrollDetectBox: css`
    position: fixed;
    background-color: ${COLOR.RED50};
    top: 30rem;
    width: 50rem;
    height: 2rem;
  `,
};
