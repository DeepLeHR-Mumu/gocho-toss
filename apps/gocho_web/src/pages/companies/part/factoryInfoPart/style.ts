import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const buttonContainer = css`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  margin-top: -2rem;
  background-color: ${COLORS.GRAY90};
`;

export const iconBox = css`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  margin-right: 1rem;
`;

export const selectButton = (active = false) => {
  return css`
    color: ${active ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
    background-color: ${COLORS.GRAY100};
    border-radius: 1.5rem;
    padding: 0.25rem 1rem;
    margin-right: 1rem;
  `;
};

export const infoContainer = css`
  display: flex;
  padding: 1rem 2rem;
`;

export const addressWrapper = css`
  width: 30%;
  margin-right: 2rem;
`;

export const factoryName = css`
  color: ${COLORS.GRAY100};
  background-color: ${COLORS.BLUE_FIRST50};
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 0 1.5rem 1.5rem 0;
`;

export const addressBox = css`
  display: flex;
  margin-top: 1rem;
`;

export const addressTitle = css`
  font-size: 0.875rem;
  font-weight: 400;
  min-width: 2rem;
  color: ${COLORS.GRAY60};
  margin-right: 0.25rem;
`;

export const address = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-right: 0.25rem;
`;

export const infoWrapper = css`
  flex-grow: 1;
`;

export const productInfo = css`
  display: flex;
  align-items: flex-start;
`;

export const infoBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const infoIcon = css`
  width: 6rem;
  height: 6rem;
  position: relative;
`;

export const infoText = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const infoTitle = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
  margin-right: 0.25rem;
`;

export const info = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.BLUE_FIRST40};
`;

export const flexBox = css`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const booleanIcon = css`
  width: 1rem;
  height: 1rem;
  position: relative;
`;
