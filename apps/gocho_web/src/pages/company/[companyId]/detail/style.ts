import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const mainContainer = css`
  background-color: #f2f2f6;
  padding-top: 1rem;
  padding-bottom: 5.5rem;
`;

export const mainContainerSkeleton = css`
  background-color: #f2f2f6;
  padding-top: 1rem;
  height: 1080px;
`;

export const flexBox = css`
  display: flex;
  align-items: flex-start;
`;

export const partContainer = css`
  margin-right: 1rem;
  flex-grow: 1;
`;

export const warningDesc = css`
  font-size: 0.75rem;
  color: ${COLORS.GRAY30};
  font-weight: 400;
`;
