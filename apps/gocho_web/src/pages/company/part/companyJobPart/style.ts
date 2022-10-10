import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const partContainer = css`
  background-color: ${COLORS.GRAY100};
  padding-top: 3rem;
`;

export const listContainer = css`
  padding: 2rem 0 4.5rem;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  min-height: 20rem;
  justify-content: space-between;
`;

export const totalCount = css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${COLORS.GRAY10};
  display: flex;
  justify-content: flex-end;
`;

export const noJobListText = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.875rem;
  text-align: center;
  color: ${COLORS.GRAY40};
`;
