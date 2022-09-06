import { FunctionComponent } from "react";

import { WarningTextProps } from "./type";
import { desc } from "./style";

export const WarningText: FunctionComponent<WarningTextProps> = ({ msg }) => {
  return <p css={desc}>{String(msg)}</p>;
};
