import { css } from "@emotion/react";
import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";
import { shorten } from "@style/common";

export const modalWrapper = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  width: 60rem;
  height: auto;
  padding: 2rem 4.5rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 1rem;
  text-align: left;
`;

export const closeButtonWrapper = css`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
`;

export const userProfile = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;

export const userProfileImage = css`
  border-radius: 50%;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  position: relative;
  z-index: 10;
  margin-right: -1.75rem;
`;

export const userNickname = css`
  display: flex;
  align-items: center;
  width: 8.5rem;
  height: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  background-color: ${COLORS.GRAY90};
  padding: 0.5rem 0.5rem 0.5rem 2.25rem;
  border-radius: 1rem;
  ${shorten(1)}
`;

export const formContainer = css``;

export const titleCSS = css`
  width: 100%;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  color: ${COLORS.GRAY30};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding: 0.875rem 2.5rem;
`;

export const bodyCSS = css`
  width: 100%;
  height: 22.5rem;
  border: none;
  margin-bottom: 0.5rem;
  padding: 1.5rem 2.5rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY90};
  font-family: Noto Sans KR, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  vertical-align: text-top;
  color: ${COLORS.GRAY30};
  resize: none;
  outline: none;
  box-shadow: none;
`;

export const setPostingTypeButton = (active = false) => {
  return css`
    width: 7.5rem;
    text-align: center;
    border-radius: 1.5rem;
    font-weight: 500;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem 2rem;
    transition: all 0.2s ease;
    word-break: keep-all;

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

export const buttonContainer = css`
  display: flex;
`;

export const submitButton = css`
  background-color: ${COLORS.BLUE_FIRST40};
  padding: 0.5rem 1.5rem;
  color: ${COLORS.GRAY100};
  border-radius: 1.5rem;
  margin: 0 0 0 auto;
`;
