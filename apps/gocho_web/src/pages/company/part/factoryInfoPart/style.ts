import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const buttonContainer = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem 2rem;
  background-color: ${COLORS.GRAY90};
`;

export const iconBox = css`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  margin-right: 1rem;
`;

export const noFactoryWarning = css`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY40};
`;

export const selectButton = (active = false) => {
  return css`
    color: ${active ? COLORS.BLUE_FIRST40 : `${COLORS.GRAY60}`};
    background-color: ${COLORS.GRAY100};
    border-radius: 1.5rem;
    height: 2rem;
    width: fit-content;
    padding: 0 1rem;
    font-size: 0.875rem;
    white-space: nowrap;
    margin: 0.5rem 1rem 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    :last-of-type {
      margin-right: 0;
    }
  `;
};

export const noFactoryBox = css`
  height: 22.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const noFactoryDesc = css`
  font-size: 1rem;
  font-weight: 400;
  color: ${COLORS.GRAY30};
  margin-bottom: 2rem;
`;

export const noFactoryButton = css`
  width: fit-content;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-color: ${COLORS.GRAY90};
  color: ${COLORS.GRAY30};
  border-radius: 2rem;
`;

export const infoContainer = css`
  display: flex;
  padding: 1rem 2rem;
`;

export const addressWrapper = css`
  width: 100%;
  max-width: 16rem;
  padding-right: 2rem;
`;

export const factoryName = css`
  color: ${COLORS.GRAY100};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.BLUE_NEON30};
  width: fit-content;
  height: 2.25rem;
  padding: 0 2rem;
  border-radius: 0 2rem 2rem 0;
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
`;

export const addressBox = css`
  display: flex;
  line-height: 1.6;
`;

export const addressTitle = css`
  font-size: 0.875rem;
  font-weight: 400;
  white-space: nowrap;
  color: ${COLORS.GRAY60};
  margin-right: 0.5rem;
`;

export const address = css`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${COLORS.GRAY10};
`;

export const infoWrapper = css`
  width: calc(100% - 16rem);
  margin-top: 3.5rem;
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
  width: 4.8rem;
  height: 4.8rem;
  position: relative;
`;

export const infoText = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const infoTextTop = css`
  display: flex;
  align-items: flex-start;
  margin-left: 1rem;
  width: calc(100% - 5rem);
`;

export const infoTitle = css`
  font-size: 0.875rem;
  white-space: nowrap;
  font-weight: 400;
  line-height: 1.6;
  color: ${COLORS.GRAY10};
  margin-right: 0.5rem;
`;

export const info = css`
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${COLORS.BLUE_NEON40};
  word-break: keep-all;
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
