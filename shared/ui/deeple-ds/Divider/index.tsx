import { DividerProps } from "./type";
import { cssObj } from "./style";

const Divider = ({ className }: DividerProps) => <hr css={cssObj.divider} className={className} />;

export default Divider;
