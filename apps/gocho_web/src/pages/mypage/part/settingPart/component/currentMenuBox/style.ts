import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const activatedBox = css`
  width: 100px;
  min-height: 100px;
  background-color: ${COLORS.GRAY100};
  color: ${COLORS.BLUE_FIRST40};
  border-radius: 2rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 0.2rem;
    font-size: 1rem;
    color: ${COLORS.BLUE_FIRST40};
  }
`;
