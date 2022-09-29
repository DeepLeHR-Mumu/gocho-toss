import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: sticky;
  top: 3.25rem;
  background-color: ${COLORS.GRAY80};
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  z-index: 10;
`;
