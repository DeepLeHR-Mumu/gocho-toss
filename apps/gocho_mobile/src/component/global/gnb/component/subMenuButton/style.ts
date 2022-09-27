import { css } from "@emotion/react";

import { PC_HOVER } from "shared-style/mediaQuery";
import { COLORS } from "shared-style/color";

export const subMenuButton = css`
  white-space: nowrap;
  font-weight: 500;
  line-height: 2.5;
  padding: 0 2rem;
  color: ${COLORS.GRAY30};
  background-color: ${COLORS.GRAY90};

  > a {
    ${PC_HOVER} {
      :hover {
        color: ${COLORS.BLUE_FIRST40};
      }
    }
  }
`;
