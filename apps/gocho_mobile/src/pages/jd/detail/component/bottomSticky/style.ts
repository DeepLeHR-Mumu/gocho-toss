import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: sticky;
  bottom: 0;
  background-color: ${COLORS.GRAY80};
  height: 5rem;
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
`;
