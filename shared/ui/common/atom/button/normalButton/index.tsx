import { FunctionComponent } from "react";
import { BaseButton } from "../baseButton";

import { PlainButtonProps } from "./type";

export const NormalButton: FunctionComponent<PlainButtonProps> = ({
  text,
  variant,
  wide = false,
  buttonClick,
  isSubmit = false,
  iconObj,
}) => {
  return (
    <BaseButton
      text={text}
      variant={variant}
      isSubmit={isSubmit}
      buttonClick={buttonClick}
      iconObj={iconObj}
      wide={wide}
    />
  );
};
