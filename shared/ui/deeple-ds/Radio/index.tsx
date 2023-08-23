import { RadioProps } from "./type";
import { cssObj } from "./style";

export const Radio = (props: RadioProps) => <input type="radio" css={cssObj.radio} {...props} />;
