import { BoxProps } from "./type";
import { cssObj } from "./style";

export const Box = ({ ...props }: BoxProps) => {
  return <div css={cssObj.wrapper} {...props} />;
};
