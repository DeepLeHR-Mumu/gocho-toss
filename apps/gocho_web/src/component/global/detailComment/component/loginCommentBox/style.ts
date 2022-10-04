import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const commentContainer = css`
  background-color: ${COLORS.GRAY90};
  padding: 1rem;
  min-height: 13rem;
  max-height: 15rem;
  overflow: hidden;
  overflow-y: scroll;
  position: relative;
`;

export const commentContainerSkeleton = css`
  width: 100%;
  max-width: 17rem;
  height: 30rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 0.25rem 0.75rem ${COLORS.GRAY80};
`;

export const commentArrCSS = css`
  > li {
    margin-bottom: 0.75rem;
  }
`;

export const firstCommentAlert = css`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  line-height: 2;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.875rem;
  color: ${COLORS.GRAY20};
`;

export const commentHeader = css`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
`;

export const nicknameCSS = css`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  color: ${COLORS.GRAY10};
  font-weight: 500;
`;

export const dateCSS = css`
  color: ${COLORS.GRAY40};
  font-size: 0.75rem;
  padding-left: 0.5rem;
`;

export const commentBody = css`
  display: flex;
  align-items: flex-end;
`;

export const commentBox = css`
  background-color: ${COLORS.GRAY100};
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 0 1rem 1rem 1rem;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 0;
    border-left: 1rem solid ${COLORS.GRAY100};
    border-top: 1rem solid transparent;
  }
`;

export const commentTypeCSS = css`
  color: ${COLORS.GRAY30};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

export const commentDesc = css`
  color: ${COLORS.GRAY10};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const evalButtonBox = css`
  margin-left: 0.5rem;

  > li {
    margin-bottom: 0.375rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

//  commentWrite

export const writeContainer = css`
  padding: 1rem;
  box-sizing: border-box;
`;

export const userNicknameCSS = css`
  color: ${COLORS.GRAY10};
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const formCSS = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border: 1px solid ${COLORS.BLUE_NEON40};
  border-radius: 2rem;
  overflow: hidden;
  padding: 0.75rem;
`;

export const textareaCSS = css`
  padding: 0.5rem;
  min-height: 3.125rem;
  font-size: 0.75rem;
  color: ${COLORS.GRAY10};
  border: 0;
  resize: none;

  :focus {
    outline: 0;
  }
`;

export const submitButton = css`
  color: ${COLORS.BLUE_NEON40};
  font-size: 1.25rem;
`;
