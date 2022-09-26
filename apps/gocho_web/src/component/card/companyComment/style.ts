import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";
import { shorten } from "shared-style/common";

export const cardWrapper = css`
  width: 30rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 0 1rem;
  transition: all 0.1s ease-in;
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.25rem;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.GRAY70};
`;

export const commentBodyContainer = css`
  position: relative;
  box-sizing: border-box;
  background-color: ${COLORS.GRAY90};
  padding: 1rem;
`;

export const companyInfoContainer = css`
  display: flex;
  align-items: center;
`;

export const companyLogoBox = css`
  width: 3.5rem;
  height: 3.5rem;
  position: relative;
`;

export const companyName = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  margin-left: 1rem;
  ${shorten()}
`;

export const commentCount = css`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${COLORS.GRAY60};
  text-align: right;
`;

export const commentContainer = css`
  overflow-y: scroll;
  height: 25rem;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 2px;
  }
`;

export const unLoginContainer = css`
  overflow-y: scroll;
  height: 25rem;
  filter: blur(3.5px);

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 2px;
  }
`;

export const linkBox = css`
  min-height: 4rem;
  padding: 1.25rem;
`;

export const unLoginBox = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 16rem;
  height: 8.25rem;
  background-color: ${COLORS.GRAY100};
  z-index: 20;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
`;

export const unLoginDesc = css`
  font-size: 0.875rem;
  color: ${COLORS.GRAY10};
  font-weight: 400;
  margin-bottom: 1rem;
`;
