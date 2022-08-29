import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const container = css`
  margin-bottom: 2rem;
`;

export const writerContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const usernameCSS = css`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
  color: ${COLORS.GRAY10};
`;

export const dateCSS = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY40};
`;

export const bodyContainer = css`
  display: flex;
  align-items: flex-end;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-left: 1.875rem solid ${COLORS.GRAY90};
    border-top: 1.875rem solid transparent;
  }
`;

export const bodyWrapper = css`
  width: 60%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${COLORS.GRAY90};
  border-radius: 0 1.875rem 1.875rem 1.875rem;
`;

export const locationCSS = css`
  font-size: 0.875rem;
  text-decoration: underline;
  margin-bottom: 1rem;
  line-height: 1.6;
  color: ${COLORS.GRAY40};
`;

export const bodyCSS = css`
  word-break: break-all;
  font-size: 1rem;
  color: ${COLORS.GRAY30};
  line-height: 1.6;
`;

export const reactionContainer = css`
  display: flex;
  margin-left: 0.5rem;
`;

export const likeButton = css`
  font-size: 0.75rem;
  border-radius: 1rem;
  color: ${COLORS.GRAY100};
  background-color: ${COLORS.BLUE_NEON40};
  margin-right: 0.5rem;
  padding: 0.125rem 0.5rem;
`;

export const dislikeButton = css`
  font-size: 0.75rem;
  border-radius: 1rem;
  background-color: ${COLORS.GRAY10};
  color: ${COLORS.GRAY100};
  padding: 0.125rem 0.5rem;
`;
