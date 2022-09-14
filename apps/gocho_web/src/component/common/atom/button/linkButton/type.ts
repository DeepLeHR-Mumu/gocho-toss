import { ColorDef } from "@type/style/color";
import { IconType } from "react-icons";
import { ButtonVariant } from "../baseButton/type";

export interface LinkButtonProps {
  text: string;
  linkTo: string;
  variant: ButtonVariant;
  wide?: boolean;
  iconObj?: {
    icon: IconType;
    color: ColorDef;
    size: number;
    position: "left" | "right";
  };
}
