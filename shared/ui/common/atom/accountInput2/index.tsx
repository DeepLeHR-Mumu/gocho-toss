import { FunctionComponent, useEffect, useState } from "react";
import { FiX, FiCheckCircle } from "react-icons/fi";

import { buttonCSS, container, errorMessage, errorMessageBox, inputCSS, labelCSS } from "./style";
import { AccountInputProps, ColorStateDef } from "./type";

export const AccountInput2: FunctionComponent<AccountInputProps> = ({
  errorObj,
  isDirty,
  registerObj,
  label,
  setError,
  setValue,
  placeholder,
  inputType,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [colorState, setColorState] = useState<ColorStateDef>("error");

  const focusFunction = () => {
    setError();
    setColorState("focus");
    setIsFocus(true);
  };

  const blurFunction = () => {
    setIsFocus(false);
  };

  const resetValue = () => {
    setValue();
    setError();
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
          onBlur={blurFunction}
          type={inputType}
        />
        {errorObj && (
          <button css={buttonCSS(colorState)} type="button" onClick={resetValue} aria-label={`${label} 제거`}>
            <FiX />
          </button>
        )}
        {!errorObj && isDirty && (
          <p css={buttonCSS(colorState)}>
            <FiCheckCircle />
          </p>
        )}
      </div>
      <div css={errorMessageBox}>
        <p css={errorMessage}>{errorObj?.message}</p>
      </div>
    </>
  );
};
