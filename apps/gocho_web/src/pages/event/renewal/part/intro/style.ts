import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const topSectionCSS = css`
  background-color: #121012;
  position: relative;
  margin-bottom: 10rem;

  :after {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: -7.5rem;
    z-index: -1;
    content: "";
    width: 120%;
    height: 15rem;
    background-color: #121012;
    border-radius: 50%;
  }
`;

export const topLayoutCSS = css`
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const infoBox = css`
  width: 37vw;
  height: 22vh;
  max-width: 27.5rem;
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const logoBox = css`
  width: 11.5rem;
  height: 1.5rem;
  position: relative;
  text-align: center;
`;

export const titleCSS = css`
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1.5rem 0 1.875rem;
  color: ${COLORS.GRAY10};
`;

export const desc = css`
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
  color: ${COLORS.GRAY10};
  line-height: 1.2;

  > span {
    display: block;
    font-size: 3rem;
    font-weight: 700;
  }
`;

export const subInfoBox = css`
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, 0);
`;

export const subTitle = css`
  color: ${COLORS.GRAY90};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;
`;

export const subDesc = css`
  color: ${COLORS.GRAY90};
  line-height: 1.8;
  font-weight: 400;
  font-size: 1rem;
`;
