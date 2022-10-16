import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${COLORS.BLUE_SECOND90};
`;

export const titleBox = css`
  height: 2rem;
  font-size: 1.25rem;
  padding: 0.5rem;
`;

export const inputBox = (isSmall: boolean) => {
  return css`
    width: ${isSmall ? "6rem" : "30%"};
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.GRAY70};
    background-color: ${COLORS.GRAY100};
    height: 2rem;
    padding: 0.25rem 0.5rem;
    margin-right: 1rem;
  `;
};

export const inputContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.5rem;
`;

export const inputTitle = css`
  color: ${COLORS.GRAY30};
  margin-right: 1rem;
`;

export const submitBannerButton = css`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2.5rem auto 0;
  padding: 0.25rem 3rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;

export const bannerBox = css`
  height: 3rem;
  margin-top: 0.5rem;

  :last-of-type {
    height: auto;
  }
`;

export const bannerId = css`
  width: 10%;
  text-align: center;
`;

export const companyName = css`
  width: 20%;
  text-align: center;
  ${shorten()};
`;

export const title = css`
  width: 40%;
  text-align: center;
  ${shorten()};
`;

export const expireDate = css`
  width: 20%;
  text-align: center;
  ${shorten()};
`;

export const deleteBannerButton = css`
  flex-grow: 1;
  padding: 0.25rem 1rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: #b32100;
  color: ${COLORS.GRAY100};
`;
