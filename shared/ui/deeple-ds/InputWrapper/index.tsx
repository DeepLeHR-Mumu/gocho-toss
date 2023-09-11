/* eslint-disable jsx-a11y/label-has-associated-control */
import { css } from "@emotion/react";

import { InputWrapperProps } from "./type";
import { cssObj } from "./style";

export const InputWrapper = ({ children, label, prefix, suffix, state, underline }: InputWrapperProps) => (
  <div css={cssObj.wrapper}>
    {label && <label css={cssObj.label}>{label}</label>}
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
      {children}
      {suffix}
    </div>
    {state?.message && (
      <span
        css={css`
          ${cssObj.message}
          ${state.state === "error" ? cssObj.errorMessage : ""}${state.state === "success" ? cssObj.successMessage : ""}
        `}
      >
        {state.message}
      </span>
    )}
  </div>
);
