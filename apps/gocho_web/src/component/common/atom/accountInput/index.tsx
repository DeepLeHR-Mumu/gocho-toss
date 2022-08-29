import { FunctionComponent, useEffect, useState } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";

import {
  buttonCSS,
  container,
  errorMessage,
  errorMessageBox,
  inputCSS,
  labelCSS,
} from "./style";
import { AccountInputProps, ColorStateDef } from "./type";

export const AccountInput: FunctionComponent<AccountInputProps> = ({
  errorObj,
  isDirty,
  registerObj,
  label,
  placeholder,
  inputType,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [colorState, setColorState] = useState<ColorStateDef>("error");

  const focusFunction = () => {
    setIsFocus((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    if (errorObj) {
      return setColorState("error");
    }
    if (isFocus) {
      return setColorState("focus");
    }
    if (!errorObj && isDirty) {
      return setColorState("success");
    }
    return setColorState("default");
  }, [isFocus, errorObj, setColorState, isDirty]);

  return (
    <>
      <div css={container}>
        <p css={labelCSS(colorState)}>{label}</p>
        <input
          {...registerObj}
          css={inputCSS(colorState)}
          placeholder={placeholder}
          onFocus={focusFunction}
          onBlur={focusFunction}
          type={inputType}
        />
        {errorObj && (
          <button css={buttonCSS(colorState)} type="button">
            <FiX />
          </button>
        )}
        {!errorObj && isDirty && (
          <button css={buttonCSS(colorState)} type="button">
            <FiCheckCircle />
          </button>
        )}
      </div>
      <div css={errorMessageBox}>
        <p css={errorMessage}>{errorObj?.message}</p>
      </div>
    </>
  );
};
