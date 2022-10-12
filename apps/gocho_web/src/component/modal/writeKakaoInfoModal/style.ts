import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: absolute;
  z-index: 50;
  left: 50%;
  top: 50%;
  width: 22rem;
  transform: translate(-50%, -50%);
  height: auto;
  padding: 2rem 2rem 4rem 2rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const logoContainer = css`
  width: 7.5rem;
  height: 1.25rem;
  position: relative;
  margin-bottom: 1rem;
`;

export const desc = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 1rem;
  font-weight: 400;
`;

export const formCSS = css`
  width: 100%;
`;

export const formArr = css`
  margin: 2rem 0;

  > li {
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const submitButtonCSS = css`
  background-color: #fee500;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  color: ${COLORS.GRAY20};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const kakaoLogoBox = css`
  width: 1rem;
  height: 1rem;
  position: relative;
  margin-right: 1rem;
`;

export const closeBtn = css`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`;

export const inputCSS = css`
  width: 100%;
  height: 3.25rem;
  padding: 0 2.6rem 0 1.75rem;
  border-radius: 2rem;
  color: ${COLORS.GRAY60};
  background-color: ${COLORS.GRAY90};
  font-size: 1rem;
  border: 1px solid ${COLORS.GRAY80};
`;

export const labelCSS = css`
  color: ${COLORS.GRAY60};
  font-size: 0.75rem;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 1.75rem;
  transform: translate(0%, -50%);
  background-color: ${COLORS.GRAY100};
  padding: 0 0.25rem;
  height: 1rem;
  text-align: center;
`;

export const positionRelative = css`
  position: relative;
`;
