import { FunctionComponent } from "react";

import { SkeletonBoxProps } from "./type";
import { skeleton } from "./style";

export const SkeletonBox: FunctionComponent<SkeletonBoxProps> = ({ color = "GRAY100" }) => (
  <div css={skeleton(color)} />
);
