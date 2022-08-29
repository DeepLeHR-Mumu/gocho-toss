import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "@style/constant";

export const wrapper = css`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.GRAY100};
  width: 100%;
  max-width: 37.5rem;
  border-radius: 2rem;
  box-shadow: 0px 0.5rem 1.5rem rgba(178, 178, 178, 0.4);
`;

export const headerCSS = css`
  text-align: center;
  border-radius: 1.5rem 1.5rem 0 0;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY10};
`;

export const titleCSS = css`
  color: ${COLORS.GRAY100};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const closeButtonCSS = css`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`;

export const body = css``;

export const factoryNameCSS = css`
  position: relative;
  background-color: ${COLORS.BLUE_NEON30};
  border-radius: 0 2rem 2rem 0;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  color: ${COLORS.GRAY100};
  font-size: 1rem;
  font-weight: 500;
  margin: 1.5rem 0 3.125rem;
`;

interface flexBoxDef {
  (
    justify:
      | "center"
      | "flex-start"
      | "space-between"
      | "space-around"
      | "space-evenly"
  ): SerializedStyles;
}

export const flexBox: flexBoxDef = (justify) => {
  return css`
    display: flex;
    align-items: flex-start;
    justify-content: ${justify};
  `;
};

export const imageBox = css`
  width: 5.3125rem;
  height: 4.5rem;
  position: relative;
`;

export const oxIconBox = css`
  position: relative;
  width: 1rem;
  height: 1rem;
  margin-top: 0.65rem;
`;

export const boxTitle = css`
  color: ${COLORS.GRAY10};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0.5rem;
  white-space: nowrap;
`;

export const boxDesc = css`
  color: ${COLORS.BLUE_NEON40};
  font-size: 0.875rem;
  display: flex;
  align-items: flex-start;
  margin: 0 0.5rem;
  word-break: keep-all;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 0.5rem;
  width: 100%;
  max-width: 13rem;
`;

export const infoDesc = css`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  line-height: 1.6;
  width: 80%;
  word-break: keep-all;
  display: flex;
  align-items: flex-start;
  color: ${COLORS.GRAY40};

  > svg {
    color: ${COLORS.BLUE_NEON50};
    font-size: 2rem;
    margin-right: 0.25rem;
    line-height: 1.6;
  }
`;

export const copyButton = css`
  margin-top: 0.5rem;
  color: ${COLORS.BLUE_NEON50};
  font-size: 1rem;
`;

const defaultBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const addressBox = css`
  ${defaultBox};
  width: 50%;
`;

export const productBox = css`
  ${defaultBox};
  width: 50%;
`;

export const hireNumberBox = css`
  ${defaultBox};
  width: 25%;
`;

export const genderBox = css`
  ${defaultBox};
  width: 25%;
`;

export const busBox = css`
  ${defaultBox};
  width: 25%;
`;

export const dormitoryBox = css`
  ${defaultBox};
  width: 25%;
`;
