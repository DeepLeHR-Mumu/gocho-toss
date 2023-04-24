import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  padding: 2.5rem 2rem 3rem 3rem;
  width: 27.25rem;
  height: 32.5rem;
  border-radius: 0 1.5rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.GRAY100};
  min-width: 330px;
  margin-left: -1.5rem;
  position: relative;
`;

export const closeButtonBox = css`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`;

export const title = css`
  color: ${COLORS.BLUE_FIRST40};
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
`;

export const formCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

export const imgContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  gap: 1rem;
`;
