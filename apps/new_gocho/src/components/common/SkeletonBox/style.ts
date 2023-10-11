import { css } from "@emotion/react";
import { COLOR } from "shared-style/color";

import { SkeletonBoxProps } from "./type";

export const skeleton = (color: NonNullable<SkeletonBoxProps["color"]>) => css`
  background-color: ${COLOR[color]};
  width: 100%;
  height: 100%;
`;
