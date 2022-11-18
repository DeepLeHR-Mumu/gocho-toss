import { FunctionComponent } from "react";

import { TextInputFormProps } from "./type";
import { textFormBox } from "./style";

export const TextInputForm: FunctionComponent<TextInputFormProps> = ({
  placeholder,
  activeBorderStyle = "gray",
  registerObj,
  fullWidth = false,
  minWidth = "auto",
  maxLength,
}) => {
  return (
    <input
      {...registerObj}
      maxLength={maxLength}
      css={textFormBox(minWidth, fullWidth, activeBorderStyle)}
      type="text"
      placeholder={placeholder}
    />
  );
};
