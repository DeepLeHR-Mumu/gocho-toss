import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  width: 100%;
  padding: 0.5rem;
  background-color: ${COLORS.BLUE_SECOND90};
  border-radius: 1rem;
  margin-bottom: 0.5rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexBox = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const iconBox = css`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
`;

export const factoryNameCSS = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  width: calc(100% - 2rem);
  font-weight: 400;
  font-size: 0.875rem;
  text-decoration-line: underline;
  color: ${COLORS.BLUE_FIRST40};
`;

export const updownIconBox = css`
  font-size: 1rem;
  background-color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  width: 2rem;
  height: 2rem;
`;

export const menuContainer = css`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
`;

export const infoBox = css``;

export const titleBox = css`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const menuIconBox = css`
  margin-bottom: 0.25rem;
  width: 5rem;
  height: 5rem;
  position: relative;
`;

export const menuNameBox = css`
  background-color: ${COLORS.GRAY100};
  width: 5.625rem;
  height: 2.25rem;
  text-align: center;
  border-radius: 1.5rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const locationContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const addressCSS = css`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${COLORS.BLUE_NEON40};
  font-style: normal;
  line-height: 1.6;
  word-break: keep-all;
  margin-bottom: 1rem;
`;

export const mapLink = css`
  color: ${COLORS.BLUE_NEON40};
  font-size: 0.75rem;
  white-space: nowrap;
  font-weight: 400;
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.BLUE_NEON50};
  border-radius: 2rem;
  width: 6rem;
  height: 2.25rem;
  justify-content: space-evenly;
`;

export const productCSS = css`
  display: flex;
  align-items: center;
  color: ${COLORS.BLUE_NEON40};
  font-size: 0.875rem;
  word-break: keep-all;
  font-weight: 400;
  line-height: 1.6;
`;

export const infoContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const contentBox = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: calc(50% - 0.5rem);
`;

export const largeMenuNameBox = css`
  background-color: ${COLORS.GRAY100};
  width: fit-content;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  height: 2.25rem;
  letter-spacing: 1px;
`;

export const numberCSS = css`
  color: ${COLORS.BLUE_NEON40};
  padding: 0 0.125rem;
  font-weight: 400;
  font-size: 0.875rem;
`;

export const xoBox = css`
  background-color: ${COLORS.GRAY100};
  width: 7.5rem;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    font-weight: 400;
    color: ${COLORS.GRAY10};
    font-size: 0.875rem;
    margin-right: 0.3rem;
  }
`;

export const xoIcons = css`
  width: 0.8rem;
  height: 0.8rem;
  position: relative;
`;

export const additionalContainer = css`
  display: flex;
  align-items: flex-start;
  width: 7.5rem;
  margin-top: 0.3rem;
`;
export const additionalInfoIcon = css`
  font-size: 0.8rem;
  color: ${COLORS.BLUE_NEON40};
  margin-right: 0.2rem;
`;

export const additionalInfoText = css`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${COLORS.GRAY40};
`;
