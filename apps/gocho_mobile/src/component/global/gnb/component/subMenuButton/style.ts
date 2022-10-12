import { css } from "@emotion/react";

import { COLORS } from "shared-style/color";

export const subMenuButton = css`
  width: 100%;
  white-space: nowrap;
  font-weight: 500;
  line-height: 2.5;
  font-size: 1rem;
  padding: 0 2rem;
  color: ${COLORS.GRAY30};

  a {
    display: block;
    width: 100%;
    text-align: left;
  }
`;
