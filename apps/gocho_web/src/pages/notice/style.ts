import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  background-color: ${COLORS.GRAY90};
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const errorWrapper = css`
  background-color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2rem;
  width: calc(100% - 8rem);
  min-height: 60vh;
  max-width: 84.125rem;
  position: relative;

  ::after {
    content: "";
    transform: translate(-50%, 0);
    left: 50%;
    bottom: -3vw;
    position: absolute;
    border-top: 3vw solid ${COLORS.GRAY100};
    border-left: 3vw solid transparent;
  }
`;

export const title = css`
  font-size: 2.25rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-bottom: 1rem;
`;

export const catchphrase = css`
  margin-bottom: 4rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
`;

export const buttonBox = css`
  position: relative;
  z-index: 10;
`;

export const logoContainer = css`
  position: relative;
  width: 7.5rem;
  height: 1rem;
  margin-top: 2.5rem;
`;

export const jobiImageContainer = css`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30vw;
  overflow: hidden;

  img {
    object-position: bottom;
  }
`;
