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
`;

export const imgContainer = css`
  gap: 1rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const confirmButton = css`
  height: 3rem;
  width: 4rem;
  border-radius: 1.5rem;
  border: solid 1px ${COLORS.GRAY30};
  color: ${COLORS.GRAY30};
`;
