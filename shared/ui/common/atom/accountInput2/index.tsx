import { FunctionComponent, useEffect, useState } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";

import { buttonCSS, container, errorMessage, errorMessageBox, inputCSS, labelCSS } from "./style";
import { AccountInputProps, ColorStateDef } from "./type";

export const AccountInput2: FunctionComponent<AccountInputProps> = ({
  errorMsg,
  registerObj,
  label,
  setValue,
  clearError,
  watch,
  placeholder,
  inputType,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [colorState, setColorState] = useState<ColorStateDef>("default");

  useEffect(() => {
    if (errorMsg) {
      return setColorState("error");
    }
    if (!errorMsg && watch) {
      return setColorState("success");
    }
    if (isFocus) {
      return setColorState("focus");
    }
    return setColorState("default");
  }, [isFocus, errorMsg, setColorState, watch]);

  return (
    <>
      <div css={container}>
        <p css={labelCSS(colorState)}>{label}</p>
        <input
          {...registerObj}
          css={inputCSS(colorState)}
          placeholder={placeholder}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          type={inputType}
        />
        {errorMsg && (
          <button
            css={buttonCSS(colorState)}
            type="button"
            onClick={() => {
              setValue();
              clearError();
            }}
            aria-label={`${label} 제거`}
          >
            <FiX />
          </button>
        )}
        {colorState === "success" && (
          <p css={buttonCSS(colorState)}>
            <FiCheckCircle />
          </p>
        )}
      </div>
      <div css={errorMessageBox}>
        <p css={errorMessage}>{errorMsg}</p>
      </div>
    </>
  );
};
