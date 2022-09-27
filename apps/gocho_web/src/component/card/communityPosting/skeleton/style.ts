import { css } from "@emotion/react";
import { COLORS } from "shared-style/color";

export const cardWrapper = css`
  border-radius: 1.875rem 1.875rem 1.875rem 0;
  background-color: ${COLORS.GRAY90};
  padding: 2rem;
  width: 100%;
  margin-right: 0.875rem;
  margin-bottom: 1.75rem;
  position: relative;
  min-height: 18.75rem;

  :last-of-type {
    margin-right: 0;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -1.75rem;
    left: 0;
    border-top: 1.875rem solid ${COLORS.GRAY90};
    border-right: 1.875rem solid transparent;
  }
`;
