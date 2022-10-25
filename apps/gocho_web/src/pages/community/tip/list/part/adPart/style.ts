import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const partContainer = css`
  background-color: ${COLORS.GRAY100};
  padding: 1rem 0;
`;

export const bannerContainer = css`
  position: relative;
  height: 11.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GRAY30};

  font-size: 1.125rem;
  color: ${COLORS.GRAY90};
  font-weight: 700;
`;
