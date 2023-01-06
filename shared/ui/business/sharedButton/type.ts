import { IconType } from "react-icons";

export type SizeType = "small" | "medium" | "large" | "xLarge";
export type RadiusType = "rect" | "round" | "circle";

export interface SharedButtonProps {
  radius: RadiusType;
  borderColor?: string;
  fontColor: string;
  iconObj?: { icon: IconType; location?: "left" | "right" };
  backgroundColor: string;
  isFullWidth?: boolean;
  size: "small" | "medium" | "large" | "xLarge";
  text: string;
  onClickHandler: (() => void) | "submit";
}
