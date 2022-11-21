import { FunctionComponent } from "react";

import { skeleton } from "./style";

export const SkeletonBox: FunctionComponent = () => {
  return <div css={skeleton} />;
};
