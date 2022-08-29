import { css } from "@emotion/react";

import { COLORS } from "@style/constant";
import { PC_HOVER } from "@style/mediaQuery";

export const wrapper = css`
  padding: 0.375rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.BLUE_FIRST40};
  color: ${COLORS.BLUE_FIRST40};
  border-radius: 2rem;

  > li {
    display: flex;
    align-items: center;
    :last-of-type {
      :after {
        content: "";
      }
    }
    :after {
      content: "/";
    }
  }
`;

export const buttonCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.75rem;
  color: ${COLORS.BLUE_FIRST40};
  font-weight: 500;
  transition: color 0.2s ease;

  ${PC_HOVER} {
    :hover {
      color: ${COLORS.BLUE_FIRST50};
    }
  }
`;
