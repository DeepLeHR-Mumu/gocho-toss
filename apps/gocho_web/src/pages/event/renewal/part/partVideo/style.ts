import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  height: 100vh;
  position: relative;
`;

export const backgroundBox = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  > img {
    object-fit: cover;
  }
`;

export const positionBox = css`
  position: absolute;
  z-index: 10;
  top: 5vw;
  left: 5vw;
  width: 100%;
  max-width: 75vw;
  height: 100%;
  max-height: 70vh;
`;

export const videoBox = css`
  width: 100%;
  height: 100%;

  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const infoBox = css`
  position: absolute;
  right: -25%;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 10;

  > li {
    background-color: #ffffffcc;
    width: 32rem;
    padding: 1.625rem;
    text-align: center;
    margin-bottom: 0.75rem;
    border-radius: 2rem;
    box-shadow: 0 0.5rem 0.625rem #0000001a;
  }
`;

export const infoTitle = css`
  display: inline-block;
  position: relative;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.GRAY10};
`;

export const lineBox = css`
  width: 100%;
  height: 1.25rem;
  position: relative;
  margin: 0.25rem 0;
`;

export const pointBox = css`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: -2rem;
  top: -0.5rem;
  > img {
    object-fit: contain;
  }
`;

export const desc = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
`;

export const descPoint = css`
  display: inline-block;
  background-color: ${COLORS.BLUE_NEON50};
  font-weight: 700;
  padding: 2px;
  margin-right: 2px;
`;

export const linkCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 500;
  margin-top: 2rem;
`;

export const listBox = css`
  background-color: rgba(216, 216, 216, 0.8);
  position: absolute;
  right: -5rem;
  bottom: -5rem;
  padding: 1rem;
  border-radius: 1rem;

  > li {
    font-size: 0.875rem;
    color: ${COLORS.GRAY10};
    font-weight: 500;
    line-height: 2;
    display: flex;
    align-items: center;
  }
`;

const defaultChechBox = css`
  margin-right: 0.25rem;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const checkBox = css`
  ${defaultChechBox};
  background-color: #017aff;
  color: ${COLORS.GRAY100};
`;

export const unCheckBox = css`
  ${defaultChechBox};
  background-color: rgba(0, 0, 0, 0.05);
`;
