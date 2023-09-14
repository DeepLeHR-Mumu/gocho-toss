import { css } from "@emotion/react";
import { NEWCOLORS } from "shared-style/color";

import { SkeletonBoxProps } from "./type";

export const skeleton = (color: NonNullable<SkeletonBoxProps["color"]>) => css`
  background-color: ${NEWCOLORS[color]};
  width: 100%;
  height: 100%;
`;
