import { CheckboxProps } from "./type";
import { cssObj } from "./style";

export const Checkbox = ({ id, disabled, checked, onChange }: CheckboxProps) => (
  <input type="checkbox" css={cssObj.checkbox} id={id} disabled={disabled} checked={checked} onChange={onChange} />
);
