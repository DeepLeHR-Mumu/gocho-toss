import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const modalContainer = css`
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`;

export const wrapper = css`
  position: relative;
  padding: 3rem;
  z-index: 10;
  width: 27.25rem;
  height: 32.5rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.GRAY90};
  min-width: 330px;
`;

export const marginContainer = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const profileImgContainer = css`
  width: 6.125rem;
  height: 6.126rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const userNameCSS = css`
  color: ${COLORS.GRAY10};
  font-size: 1.3125rem;
  margin-bottom: 0.3125rem;
  font-weight: bold;
`;

export const accountCSS = css`
  color: #919191;
  font-size: 1rem;
  /* margin-bottom: .1rem; */
`;
export const emailCSS = css`
  color: #919191;
  font-size: 1rem;
  /* margin-bottom: 3.75rem; */
`;

export const buttonCSS = css`
  margin-top: 0.875rem;
  width: fit-content;
  height: 3rem;
  padding: 0 2rem;
  display: flex;
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  background-color: ${COLORS.GRAY70};
  border-radius: 2rem;
  min-width: 10rem;
  /* margin-bottom: 2.9rem; */
`;

export const deleteAccountCSS = css`
  color: #cfcfcf;
  padding: 0.3rem;
`;
