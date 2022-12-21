import { IconType } from "react-icons";

import { ColorDef } from "shared-type/style/color";

export interface CommonSquareLinkProps {
  text: string;
  link: string;
  iconObj?: { Icon: IconType; location: "right" | "left" };
  backgroundColor: ColorDef;
  fontColor: ColorDef;
  borderColor: ColorDef;
  onClickHandler?: never;
}

export interface CommonSquareButtonProps {
  text: string;
  link?: never;
  iconObj?: { Icon: IconType; location: "right" | "left" };
  backgroundColor: ColorDef;
  fontColor: ColorDef;
  borderColor: ColorDef;
  onClickHandler: () => void;
}
