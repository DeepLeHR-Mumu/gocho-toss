import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  width: 100%;
  padding: 0.8rem 0.8rem;
  background-color: ${COLORS.BLUE_SECOND90};
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const headerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexBox = css`
  display: flex;
`;

export const iconBox = css`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
`;

export const factoryNameCSS = css`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  > p {
    font-weight: 400;
    text-decoration-line: underline;
    color: ${COLORS.BLUE_FIRST40};
  }
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
  display: flex;
  margin-bottom: 1rem;
  > div {
    :first-of-type {
      margin-right: 1rem;
    }
  }
`;

export const menuIconBox = css`
  width: 5.625rem;
  height: 5.625rem;
  position: relative;
`;

export const menuNameBox = css`
  background-color: ${COLORS.GRAY100};
  width: 5.625rem;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 1.5rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
`;

export const locationContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const addressCSS = css`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${COLORS.BLUE_NEON40};
  font-style: normal;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const mapLink = css`
  color: ${COLORS.BLUE_NEON40};
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  padding: 0.5rem 1.5rem;
  border: 1px solid #6c9eff;
  border-radius: 1.5rem;
  flex-grow: 0;
  align-items: center;
  > div {
    color: ${COLORS.BLUE_NEON40};
    margin-right: 0.3rem;
  }
`;

export const productCSS = css`
  display: flex;
  align-items: center;
  > p {
    color: ${COLORS.BLUE_NEON40};
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const infoContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 45%;
    margin-bottom: 1rem;
  }
`;

export const largeMenuNameBox = css`
  background-color: ${COLORS.GRAY100};
  width: 7.5rem;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 1.5rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
`;

export const numberCSS = css`
  color: ${COLORS.BLUE_NEON40};
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
