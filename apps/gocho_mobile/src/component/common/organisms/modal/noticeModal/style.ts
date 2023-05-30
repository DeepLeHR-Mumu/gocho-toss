import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cssObj = {
  wrapper: css`
    position: relative;
    font-family: "Pretendard Variable", serif;
    height: 21.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2.5rem 1rem 1rem;
  `,

  closeTopButton: css`
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;

    color: #9ba0a9;

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,

  iconBox: css`
    position: relative;
    width: 5rem;
    height: 5rem;

    > img {
      object-fit: contain;
      border-radius: 1.5rem;
    }
  `,

  logoBox: css`
    position: relative;
    width: 11.5rem;
    height: 1.75rem;
    margin-top: 1.25rem;

    > img {
      object-fit: contain;
    }
  `,

  text: css`
    margin-top: 1.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #1c1c1c;
  `,

  linkButton: css`
    width: 100%;
    background-color: ${COLORS.BLUE_FIRST40};
    color: ${COLORS.GRAY100};
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    padding: 0.75rem 1rem;
    text-align: center;
  `,

  closeButton: css`
    width: 100%;
    font-size: 0.75rem;
    line-height: 1.4;
    color: #6b7684;
    margin-top: 1rem;
  `,
};
