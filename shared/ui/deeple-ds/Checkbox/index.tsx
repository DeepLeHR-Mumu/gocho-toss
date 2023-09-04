import { ForwardRefRenderFunction, forwardRef } from "react";
import { CheckboxProps } from "./type";
import { cssObj } from "./style";

const ForwardedCheckbox: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = ({ ...props }, ref) => (
  <input type="checkbox" css={cssObj.checkbox} {...props} ref={ref} />
);

export const Checkbox = forwardRef(ForwardedCheckbox);
