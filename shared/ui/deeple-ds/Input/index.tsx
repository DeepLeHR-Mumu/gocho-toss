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
  // <div css={cssObj.wrapper}>
  //   {label && (
  //     <label css={cssObj.label} htmlFor={props.id}>
  //       {label}
  //     </label>
  //   )}
  //   <div
  //     css={css`
  //       ${cssObj.inputWrapper(state?.state === "disabled")}${state?.state === "error"
  //         ? cssObj.error
  //         : ""}${state?.state === "success" ? cssObj.success : ""}${underline
  //         ? cssObj.underLine(state?.state === "disabled")
  //         : ""}
  //     `}
  //   >
  //     {prefix}
  //     <input css={cssObj.input} disabled={state?.state === "disabled"} {...props} ref={ref} />
  //     {suffix}
  //   </div>
  //   {state?.message && (
  //     <span
  //       css={css`
  //         ${cssObj.message}
  //         ${state.state === "error" ? cssObj.errorMessage : ""}${state.state === "success" ? cssObj.successMessage : ""}
  //       `}
  //     >
  //       {state.message}
  //     </span>
  //   )}
  // </div>
);

export const Input = forwardRef(ForwardedRefInput);
