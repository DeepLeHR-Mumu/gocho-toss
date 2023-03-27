import { FunctionComponent } from "react";
import { BaseButton } from "../baseButton";

import { LinkButtonProps } from "./type";

export const LinkButton: FunctionComponent<LinkButtonProps> = ({ text, linkTo, variant, wide = false, iconObj }) => (
  <BaseButton text={text} variant={variant} linkTo={linkTo} iconObj={iconObj} wide={wide} />
);
