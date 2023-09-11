import { ForwardRefRenderFunction, forwardRef } from "react";

import { InputWrapper } from "../InputWrapper";
import { TextareaProps } from "./type";
import { cssObj } from "./style";

const ForwardedRefTextarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  { label, prefix, suffix, state, underline, height = 3, ...props },
  ref
) => (
  <InputWrapper label={label} prefix={prefix} suffix={suffix} state={state} underline={underline}>
    <textarea css={cssObj.textarea(height)} {...props} ref={ref} />
  </InputWrapper>
);

export const Textarea = forwardRef(ForwardedRefTextarea);
