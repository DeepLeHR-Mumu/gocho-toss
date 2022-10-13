import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY90};
  width: 100%;
  height: 40rem;
  padding-top: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const errorMsgWrapper = css`
  background-color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2rem;
  width: calc(100% - 4rem);
  padding: 3rem;
  position: relative;

  ::after {
    content: "";
    transform: translate(-50%, 0);
    left: 15%;
    bottom: -9vw;
    position: absolute;
    border-top: 10vw solid ${COLORS.GRAY100};
    border-left: 10vw solid transparent;
  }
`;

export const errorMsgContainer = css`
  margin-bottom: 1.5rem;
  > h1 {
    font-size: 1rem;
    color: ${COLORS.GRAY10};
    line-height: 1.6rem;
    text-align: center;
    white-space: nowrap;
    font-weight: 500;
  }
`;

export const catchPhrase = css`
  margin-bottom: 1.5rem;
  > p,
  a {
    text-align: center;
    font-size: 0.875rem;
    color: ${COLORS.GRAY60};
    font-weight: 400;
    display: block;
    white-space: nowrap;
    line-height: 1.6rem;
  }
`;

export const gochoLogoBox = css`
  margin-top: 2.5rem;
  position: relative;
  width: 7.5rem;
  height: 1rem;
`;

export const jobiContainer = css`
  position: absolute;
  height: 1rem;
  width: 100%;
  bottom: 0;
  > div {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 30rem;
    img {
      object-position: right bottom;
    }
  }
`;
