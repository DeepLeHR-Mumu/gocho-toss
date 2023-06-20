export type ButtonDef =
  | "fillBlue"
  | "fillRed"
  | "fillLightBlue"
  | "fillWhite"
  | "outLineBlue"
  | "outLineGray"
  | "disabled";

export interface SharedButtonProps {
  buttonType: ButtonDef;
  width: number;
  text: string;
  isMobile?: boolean;
  onClickHandler: (() => void) | "submit";
}
