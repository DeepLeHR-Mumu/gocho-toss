import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const specCardWrapper = css`
  width: 100%;
  min-height: 630px;
  padding: 3rem 3rem 10rem 3rem;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const formCSS = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
