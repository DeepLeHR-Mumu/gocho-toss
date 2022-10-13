import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const wrapper = css`
  position: sticky;
  top: 5.5rem;
  left: 0;
  width: 5rem;
`;

export const menuOpenBox = css`
  width: 100px;
  min-height: 100px;
  background-color: ${COLORS.GRAY100};
  border-radius: 2rem;
  margin-bottom: 1rem;
  display: flex;
  font-size: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
