import { css } from "@emotion/react";
import { shorten } from "shared-style/common";
import { COLORS } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${COLORS.BLUE_SECOND90};
`;

export const tableTitle = css`
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

export const cardPadding = css`
  background-color: ${COLORS.GRAY100};
  width: 24.5rem;
  padding: 1rem;
`;

export const cardWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem;
  background-color: #f2f4f7;
`;

export const cardContainer = css`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const companyLogoWrapper = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY100};
  width: 8.5rem;
  height: 8.5rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
`;

export const companyLogoBox = css`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
`;

export const infoContainer = css`
  margin-left: 0.5rem;
  width: 100%;
`;

export const companyName = css`
  width: fit-content;
  display: block;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  padding: 0.25rem 1rem;
  line-height: 1.6;
  ${shorten(2)}
`;

export const date = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  position: absolute;
  bottom: 0;
  right: 0.5rem;
`;

export const titleCSS = css`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  line-height: 1.6;
  height: 3.35rem;
  ${shorten(2)};
  text-align: left;
`;

export const colorLine = (colorCode: string) => {
  return css`
    height: 0.8rem;
    width: 100%;
    background-image: linear-gradient(to right, ${colorCode}, ${COLORS.BLUE_FIRST40});
  `;
};

export const getJobButton = css`
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${COLORS.BLUE_NEON50};
  color: ${COLORS.GRAY100};
  margin-right: 0.5rem;
  border: 2px solid ${COLORS.GRAY10};
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

export const bannerIdBox = css`
  width: 10%;
  text-align: center;
`;

export const companyNameBox = css`
  width: 20%;
  text-align: center;
  ${shorten()};
`;

export const titleBox = css`
  width: 40%;
  text-align: center;
  ${shorten()};
`;

export const expireDateBox = css`
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

export const flexBox = css`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

export const changeBannerButton = css`
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: auto;
  padding: 0.25rem 3rem;
  border: 2px solid ${COLORS.GRAY10};
  background-color: ${COLORS.BLUE_NEON40};
  color: ${COLORS.GRAY100};
`;
