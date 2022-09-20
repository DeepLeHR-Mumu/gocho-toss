import { css, SerializedStyles } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const container = css`
  width: 100%;
  max-width: 680px;
  display: flex;
  justify-content: center;
  align-items: center;

  > li {
    width: 49%;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    :first-of-type {
      margin-right: 1%;
    }
    :last-of-type {
      margin-left: 1%;
    }
  }
`;

interface titleDef {
  (isCheck: boolean): SerializedStyles;
}

export const title: titleDef = (isCheck) => {
  return css`
    width: 8.25rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: ${isCheck ? COLORS.BLUE_NEON40 : COLORS.GRAY40};
    font-weight: 500;
    text-align: center;
    border: 1px solid ${isCheck ? COLORS.BLUE_NEON40 : COLORS.GRAY70};
    border-radius: 2rem;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease;
  `;
};

interface imageBoxDef {
  (isCheck: boolean, type: "고졸" | "초대졸"): SerializedStyles;
}
export const imageBox: imageBoxDef = (isCheck, type) => {
  return css`
    cursor: pointer;
    width: 300px;
    height: 300px;
    border: 1px solid ${isCheck ? COLORS.BLUE_NEON40 : COLORS.GRAY70};
    border-radius: 1rem;
    overflow: hidden;
    padding: 1rem;
    position: relative;
    box-sizing: border-box;
    transition: all 0.2s ease;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: ${isCheck ? `grayscale(0)` : `grayscale(1)`};
    background-image: ${type === "고졸"
      ? `url("/images/global/spec/highSchool.png")`
      : `url("/images/global/spec/university.png")`};
  `;
};
