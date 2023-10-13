import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";
import { shorten } from "shared-style/common";

export const sectionContainer = css`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${COLOR.BLUE50};
`;

export const inputBox = (isSmall: boolean) => css`
  width: ${isSmall ? "6rem" : "20%"};
  border-radius: 0.5rem;
  border: 1px solid ${COLOR.GRAY300};
  background-color: ${COLOR.WHITE};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.5rem;
`;

export const inputTitle = css`
  color: ${COLOR.GRAY600};
  margin-right: 1rem;
`;

export const cardPadding = css`
  background-color: ${COLOR.WHITE};
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
  background-color: ${COLOR.WHITE};
  width: 8.5rem;
  height: 8.5rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
`;

export const companyLogoBox = css`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;

  > img {
    object-fit: contain;
  }
`;

export const infoContainer = css`
  margin-left: 0.5rem;
  width: 100%;
`;

export const companyName = css`
  width: fit-content;
  display: block;
  color: ${COLOR.GRAY900};
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${COLOR.WHITE};
  border-radius: 1.5rem;
  padding: 0.25rem 1rem;
  line-height: 1.6;
  ${shorten(2)}
`;

export const date = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLOR.GRAY900};
  position: absolute;
  bottom: 0;
  right: 0.5rem;
`;

export const titleCSS = css`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${COLOR.GRAY900};
  line-height: 1.6;
  height: 3.35rem;
  ${shorten(2)};
  text-align: left;
`;

export const colorLine = (colorCode: string) => css`
  height: 0.8rem;
  width: 100%;
  background-image: linear-gradient(to right, ${colorCode}, ${COLOR.BLUE300});
`;

export const getJobButton = css`
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: ${COLOR.BLUE250};
  color: ${COLOR.WHITE};
  margin-right: 0.5rem;
  border: 2px solid ${COLOR.GRAY900};
`;

export const colorPicker = css`
  opacity: 0;
  height: 1px;
`;

export const submitBannerButton = css`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2.5rem auto 0;
  padding: 0.25rem 3rem;
  border: 2px solid ${COLOR.GRAY900};
  background-color: ${COLOR.BLUE300};
  color: ${COLOR.WHITE};
`;
