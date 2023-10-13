import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

export const sectionContainer = css`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${COLOR.BLUE50};
`;

export const inputBox = (isSmall: boolean) => css`
  width: ${isSmall ? "6rem" : "30%"};
  border-radius: 0.5rem;
  border: 1px solid ${COLOR.GRAY300};
  background-color: ${COLOR.WHITE};
  height: 2rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
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
  border: 2px solid ${COLOR.GRAY900};
  background-color: ${COLOR.BLUE300};
  color: ${COLOR.WHITE};
`;
