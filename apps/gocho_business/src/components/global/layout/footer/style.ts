import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    background-color: #f6f7fa;
    width: 100%;
  `,
  container: css`
    display: flex;
    width: 100%;
    max-width: 1032px;
  `,
  infoBox: css`
    width: calc(100% - 23.75rem);
    padding: 3rem;
  `,
  customBox: css`
    display: flex;
    align-items: flex-start;
    padding: 0 4rem;
    flex-direction: column;
    justify-content: center;
    width: 23.75rem;
    background-color: ${COLORS.GRAY90};
  `,
  titleBox: css`
    position: relative;
    width: 9.5rem;
    height: 1.5rem;
    display: block;
    margin-bottom: 1rem;

    > img {
      object-fit: contain;
    }
  `,
  desc: css`
    font-size: 0.75rem;
    color: ${COLORS.GRAY40};
    line-height: 2;
    > a {
      color: inherit;
    }
    > span {
      position: relative;
      :first-of-type {
        margin-right: 1rem;
        :after {
          content: "";
          width: 1px;
          height: 0.75rem;
          background-color: ${COLORS.GRAY40};
          position: absolute;
          right: -0.5rem;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
    }
  `,
  copyRight: css`
    font-size: 0.75rem;
    color: ${COLORS.GRAY40};
    margin-top: 1rem;
  `,
  title: css`
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.GRAY40};
    line-height: 2;
  `,
  helpBox: css`
    display: flex;
    width: 100%;
    align-items: center;
  `,
  linkCSS: css`
    font-size: 0.75rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
    color: ${COLORS.GRAY40};
  `,
};
