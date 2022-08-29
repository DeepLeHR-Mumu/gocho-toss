import { ColorDef } from "@type/style/color";
import { IconType } from "react-icons";
import { ButtonVariant } from "../baseButton/type";

export interface PlainButtonProps {
  text: string;
  variant: ButtonVariant;
  wide: boolean;
  buttonClick?: () => void;
  isSubmit?: boolean;
  iconObj?: {
    icon: IconType;
    color: ColorDef;
    size: number;
    position: "left" | "right";
  };
}

export interface SubmitButtonProps {
  text: string;
  variant: ButtonVariant;
  wide: boolean;
  isSubmit: boolean;
  iconObj?: {
    icon: IconType;
    color: ColorDef;
    size: number;
    position: "left" | "right";
  };
  buttonClick?: never;
}

