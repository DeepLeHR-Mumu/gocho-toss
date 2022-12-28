import { css } from "@emotion/react";

export const cssObj = {
  wrapper: css`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  `,
  imageBox: css`
    position: relative;
    border-radius: 50%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.025);
    overflow: hidden;
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
    flex-shrink: 0;
  `,
  nameCSS: css`
    font-weight: 700;
    font-size: 1.25rem;
    word-break: break-all;
  `,
};
