import { DividerProps } from "./type";
import { cssObj } from "./style";

export const Divider = ({ className }: DividerProps) => <hr css={cssObj.divider} className={className} />;
