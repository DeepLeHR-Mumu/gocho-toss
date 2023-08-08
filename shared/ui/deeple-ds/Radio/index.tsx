import { RadioProps } from "./type";
import { cssObj } from "./style";

const Radio = (props: RadioProps) => <input type="radio" css={cssObj.radio} {...props} />;

export default Radio;
