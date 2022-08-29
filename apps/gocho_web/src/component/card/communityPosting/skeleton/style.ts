import { css } from "@emotion/react";
import { COLORS } from "@style/constant";

export const cardWrapper = css`
  border-radius: 1.875rem 1.875rem 1.875rem 0;
  background-color: ${COLORS.GRAY90};
  padding: 2rem;
  margin-right: 2rem;
  position: relative;
  width: 31%;
  min-height: 18.75rem;

  ::after {
    content: "";
    position: absolute;
    bottom: -1.75rem;
    left: 0;
    border-top: 1.875rem solid ${COLORS.GRAY90};
    border-right: 1.875rem solid transparent;
  }
`;
