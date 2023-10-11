import { FunctionComponent, useState } from "react";
import { css } from "@emotion/react";

import { SharedRadioButtonProps } from "./type";
import { cssObj } from "./style";

export const SharedRadioButton: FunctionComponent<SharedRadioButtonProps> = ({
  value,
  isDisabled = false,
  registerObj,
  id,
  children,
  onClick,
  additionalStyle,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label htmlFor={id} css={cssObj.label(isFocus)}>
      <input
        type="radio"
        id={id}
        css={cssObj.radio}
        {...registerObj}
        value={value}
        disabled={isDisabled}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        onClick={onClick}
      />
      <div
        css={css`
          ${cssObj.radioBox(isDisabled)}${additionalStyle}
        `}
      />
      {children}
    </label>
  );
};
