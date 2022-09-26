import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";
import { PC_HOVER } from "shared-style/mediaQuery";
import { shorten } from "shared-style/common";

export const modalWrapper = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  width: 100%;
  max-width: 60rem;
  padding: 1.875rem 6.25rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
`;

export const closeButtonWrapper = css`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;

export const userProfile = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
  margin-bottom: 1rem;
  background-color: ${COLORS.GRAY90};
  width: 10rem;
  height: 2rem;
  border-radius: 1rem;
  position: relative;
`;

export const userProfileImage = css`
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 0;
`;

export const userNickname = css`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  width: calc(100% - 2.25rem);
  ${shorten(1)};
`;

export const formContainer = css``;

export const titleCSS = css`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background-color: ${COLORS.GRAY90};
  color: ${COLORS.GRAY30};
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  padding: 0 2.5rem;

  ::placeholder {
    color: ${COLORS.GRAY60};
  }
`;

export const bodyCSS = css`
  width: 100%;
  min-height: 23rem;
  border: none;
  margin-bottom: 0.5rem;
  padding: 1.5rem 2.5rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  font-size: 1rem;
  font-weight: 400;
  vertical-align: text-top;
  color: ${COLORS.GRAY10};
  resize: none;

  ::placeholder {
    color: #b2b2b2;
  }
`;

export const setPostingTypeButton = (active = false) => {
  return css`
    width: 7.5rem;
    height: 2.5rem;
    text-align: center;
    border-radius: 1.5rem;
    font-weight: 400;
    margin-right: 0.5rem;
    transition: all 0.2s ease;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;

    ${PC_HOVER} {
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 2px 0 #00000040;

        &:nth-of-type(1) {
          color: #09a434;
        }

        &:nth-of-type(2) {
          color: #5429cd;
        }

        &:nth-of-type(3) {
          color: ${COLORS.GRAY10};
        }

        &:nth-of-type(4) {
          color: #f06500;
        }
      }
    }

    &:nth-of-type(1) {
      border-color: ${active ? "#EDFFE3" : `${COLORS.GRAY90}`};
      color: ${active ? "#09A434" : `${COLORS.GRAY30}`};
      background-color: ${active ? "#EDFFE3" : `${COLORS.GRAY90}`};
    }

    &:nth-of-type(2) {
      border-color: ${active ? "#EBE3FF" : `${COLORS.GRAY90}`};
      color: ${active ? "#5429CD" : `${COLORS.GRAY30}`};
      background-color: ${active ? "#EBE3FF" : `${COLORS.GRAY90}`};
    }

    &:nth-of-type(3) {
      border-color: ${active ? COLORS.GRAY70 : `${COLORS.GRAY90}`};
      color: ${active ? `${COLORS.GRAY10}` : `${COLORS.GRAY30}`};
      background-color: ${active ? COLORS.GRAY70 : `${COLORS.GRAY90}`};
    }

    &:nth-of-type(4) {
      border-color: ${active ? "#FFF4DC" : `${COLORS.GRAY90}`};
      color: ${active ? "#F06500" : `${COLORS.GRAY30}`};
      background-color: ${active ? "#FFF4DC" : `${COLORS.GRAY90}`};
    }

    &:last-of-type {
      margin-right: 0;
    }
  `;
};

export const optionDesc = css`
  text-align: left;
  font-size: 0.875rem;
  color: ${COLORS.GRAY30};
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-bottom: 0.8rem;
`;

export const buttonContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const submitButton = css`
  background-color: ${COLORS.BLUE_FIRST40};
  padding: 0 0.875rem;
  color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  margin: 0 0 0 auto;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 7.5rem;
`;
