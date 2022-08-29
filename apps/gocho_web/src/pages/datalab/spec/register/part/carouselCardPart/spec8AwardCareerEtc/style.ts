import { css } from "@emotion/react";

import { COLORS } from "@style/constant";

export const textareaCSS = css`
  width: 100%;
  max-width: 40rem;
  padding: 1rem;
  box-sizing: border-box;
  color: ${COLORS.GRAY40};
  font-size: 0.875rem;
  font-weight: 400;
  border: 1px solid ${COLORS.GRAY70};
  border-radius: 1rem;
  min-height: 10rem;
  line-height: 1.5;
  margin-bottom: 3.5rem;

  ::placeholder {
    text-align: center;
    color: ${COLORS.GRAY60};
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
