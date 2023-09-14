import { DividerProps } from "./type";
import { cssObj } from "./style";

export const Divider = ({ className }: DividerProps) => <div css={cssObj.divider} className={className} />;
