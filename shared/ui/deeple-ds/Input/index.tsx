import { css } from "@emotion/react";

import { InputProps } from "./type";
import { cssObj } from "./style";

const Input = ({ label, id, placeholder, state, onChange }: InputProps) => (
  <div css={cssObj.wrapper}>
    {label && (
      <label css={cssObj.label} htmlFor={id}>
        {label}
      </label>
    )}
    <div>
      <input
        type="text"
        css={css`
          ${cssObj.input}${state?.state === "error" ? cssObj.error : ""}${state?.state === "success"
            ? cssObj.success
            : ""}
        `}
        id={id}
        placeholder={placeholder}
        disabled={state?.state === "disabled"}
        onChange={onChange}
      />
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
