import { SwitchProps } from "./type";
import { cssObj } from "./style";

const Switch = (props: SwitchProps) => (
  // eslint-disable-next-line
  <label htmlFor={props.id} css={cssObj.switchWrapper}>
    <input type="checkbox" {...props} />
    <span />
  </label>
);

export default Switch;
