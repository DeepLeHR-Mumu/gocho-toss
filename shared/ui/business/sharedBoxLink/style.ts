import { css } from "@emotion/react";

export const cssObj = {
  wrapper: (backGroundColor: string, isFullWidth?: boolean) => css`
    display: flex;
    overflow: hidden;
    border-radius: 0.4rem;
    background-color: ${backGroundColor};
    ${isFullWidth
      ? css`
          width: 100%;
        `
      : css`
          width: fit-content;
        `};
    :hover {
      > div {
        background-color: rgba(0, 0, 0, 0.15);
      }
    }
    :active {
      > div {
        background-color: rgba(0, 0, 0, 0.35);
      }
    }
  `,

  container: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 1rem;
    width: 100%;
  `,
  icon: (fontColor: string, iconLocation: "left" | "right") => css`
    ${iconLocation === "left"
      ? css`
          margin-right: 0.5rem;
        `
      : css`
          margin-left: 0.5rem;
        `}
    color: ${fontColor};
    display: flex;
    align-items: center;
  `,
  text: (fontColor: string) => css`
    color: ${fontColor};
    font-weight: 400;
    font-size: 1rem;
  `,
};
