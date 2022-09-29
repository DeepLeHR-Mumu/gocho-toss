import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  width: 100%;
  border-radius: 1.5rem;
  padding: 1.5rem;
  background-color: ${COLORS.GRAY100};
  margin-bottom: 2rem;
`;
export const logoBox = css`
  width: 8.5rem;
  height: 8.5rem;
  position: relative;
  box-shadow: 0px 2px 8px rgba(160, 160, 160, 0.25);
  border-radius: 1.5rem;
`;
