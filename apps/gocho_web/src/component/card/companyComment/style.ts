import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cardWrapper = css`
  width: 30rem;
  border-radius: 1.5rem;
  background-color: ${COLORS.GRAY100};
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.15);
  margin: 0 1rem;
  transition: all 0.1s ease-in;
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.GRAY70};
`;

export const commentBodyContainer = css`
  padding: 1.5rem 2rem 2rem 2rem;
  box-sizing: border-box;
`;

export const companyInfoContainer = css`
  display: flex;
  align-items: center;
`;

export const companyLogoBox = css`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
`;

export const companyName = css`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${COLORS.GRAY10};
  margin-left: 1rem;
`;

export const commentCount = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
  text-align: right;
`;

export const commentContainer = css`
  overflow-y: scroll;
  height: 19.375rem;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.BLUE_SECOND30};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${COLORS.GRAY100};
  }
`;

export const showMoreCompanyCommentButton = css`
  font-size: 1rem;
  border-radius: 2rem;
  background-color: ${COLORS.BLUE_SECOND70};
  color: ${COLORS.BLUE_FIRST30};
  border: 1px solid ${COLORS.BLUE_FIRST30};
  height: 3rem;
  margin-top: 2rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
