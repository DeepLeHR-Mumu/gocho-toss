import { css } from "@emotion/react";

import { InputProps } from "./type";
import { cssObj } from "./style";

const Input = ({ label, prefix, suffix, state, underline, ...props }: InputProps) => (
  <div css={cssObj.wrapper}>
    {label && (
      <label css={cssObj.label} htmlFor={props.id}>
        {label}
      </label>
    )}
    <div
      css={css`
        ${cssObj.inputWrapper(state?.state === "disabled")}${state?.state === "error"
          ? cssObj.error
          : ""}${state?.state === "success" ? cssObj.success : ""}${underline
          ? cssObj.underLine(state?.state === "disabled")
          : ""}
      `}
    >
      {prefix}
      <input css={cssObj.input} disabled={state?.state === "disabled"} {...props} />
      {suffix}
    </div>
    {state?.message && (
      <span
        css={css`
          ${state.state === "error" ? cssObj.errorMessage : ""}${state.state === "success" ? cssObj.successMessage : ""}
        `}
      >
        {state.message}
      </span>
    )}
  </div>
);

export default Input;
