import { FunctionComponent } from "react";

import { WarningDescProps } from "./type";
import { desc } from "./style";

export const WarningDesc: FunctionComponent<WarningDescProps> = ({ msg }) => {
  return <p css={desc}>{String(msg)}</p>;
};
