import { ForwardRefRenderFunction, forwardRef } from "react";

import { InputWrapper } from "../InputWrapper";
import { InputProps } from "./type";
import { cssObj } from "./style";

const ForwardedRefInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, prefix, suffix, state, underline, ...props },
  ref
) => (
  <InputWrapper label={label} prefix={prefix} suffix={suffix} underline={underline}>
    <input css={cssObj.input} disabled={state?.state === "disabled"} {...props} ref={ref} />
  </InputWrapper>
);

export const Input = forwardRef(ForwardedRefInput);
