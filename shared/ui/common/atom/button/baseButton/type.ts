import { ColorDef } from "shared-type/style/color";
import { IconType } from "react-icons";

export type ButtonVariant = "filled" | "outlined" | "text";

interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  wide: boolean;
  linkTo?: never;
  isSubmit: boolean;
  buttonClick?: () => void;
  iconObj?: {
    icon: IconType;
    color: ColorDef;
    size: number;
    position: "left" | "right";
  };
}

interface LinkButtonProps {
  text: string;
  variant: ButtonVariant;
  wide: boolean;
  buttonClick?: never;
  isSubmit?: never;
  linkTo: string;
  iconObj?: {
    icon: IconType;
    color: ColorDef;
    size: number;
    position: "left" | "right";
  };
}

export type GeneralButtonProps = ButtonProps | LinkButtonProps;
