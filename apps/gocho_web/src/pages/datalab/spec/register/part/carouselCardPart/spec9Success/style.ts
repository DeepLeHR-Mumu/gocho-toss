import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const desc = css`
  color: ${COLORS.GRAY30};
  font-size: 1rem;
  text-align: center;
  line-height: 2;
`;

export const specCardWrapper = css`
  width: 100%;
  min-height: 29rem;
  padding: 2.5rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const successButton = css`
  width: 100%;
  max-width: 13.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.BLUE_FIRST40};
  font-size: 14px;
  font-weight: 500;
  padding: 0rem 2rem;
  border-radius: 2rem;
  color: ${COLORS.GRAY100};
  height: 3rem;
  box-sizing: border-box;
  white-space: nowrap;
  margin-top: 5.625rem;
`;
