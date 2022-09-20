import { css } from "@emotion/react";

import { PC_HOVER } from "shared-style/mediaQuery";
import { COLORS } from "shared-style/color";

export const subMenuButtonCSS = css`
  white-space: nowrap;
  color: ${COLORS.GRAY30};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 2.5;

  > a {
    ${PC_HOVER} {
      :hover {
        color: ${COLORS.BLUE_FIRST40};
      }
    }
  }
`;
