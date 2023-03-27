import { FunctionComponent } from "react";

import Link from "next/link";
import { buttonCSS, iconCSS } from "./style";
import { GeneralButtonProps } from "./type";

export const BaseButton: FunctionComponent<GeneralButtonProps> = ({
  text,
  variant,
  wide,
  isSubmit,
  buttonClick,
  iconObj,
  linkTo,
}) => {
  if (linkTo) {
    return (
      <Link href={linkTo} passHref css={buttonCSS(variant, wide, iconObj?.position)}>
        {iconObj && (
          <div css={iconCSS(iconObj.size, iconObj.color)}>
            <iconObj.icon />
          </div>
        )}
        {text}
      </Link>
    );
  }
  return (
    <button
      type={isSubmit === true ? "submit" : "button"}
      onClick={buttonClick}
      css={buttonCSS(variant, wide, iconObj?.position)}
    >
      {iconObj && (
        <div css={iconCSS(iconObj.size, iconObj.color)}>
          <iconObj.icon />
        </div>
      )}
      <span>{text}</span>
    </button>
  );
};
